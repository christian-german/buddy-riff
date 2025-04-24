import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../services/audio.service';
import { ChordDefinition, TriadInversion, FretboardPosition, TriadInversionType } from '../definitions/interfaces';
import { chordDefinitions } from '../definitions/chord-definitions';
import { triadDefinitions } from '../definitions/triad-definitions';

// Note type enum for coloring
export enum NoteType {
    Root = 'root',
    Third = 'third',
    Fifth = 'fifth',
    Other = 'other'
}

@Component({
    selector: 'app-fretboard-diagram',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './fretboard-diagram.component.html',
    styleUrls: ['./fretboard-diagram.component.css']
})
export class FretboardDiagramComponent implements OnChanges {
    @Input() diagramName: string = '';
    @Input() diagramType: 'chord' | 'triad' = 'chord';
    @Input() autoPlay: boolean = false;
    @Input() selectedInversion: (TriadInversionType | 'All Types') = 'All Types';
    @Output() playingComplete = new EventEmitter<void>();

    // For both chord and triad modes
    hasInversions: boolean = false;

    // For chord mode
    currentPositions: FretboardPosition[] = [];
    mutedStrings: number[] = [];
    openStrings: number[] = [];
    barres: { fromString: number; toString: number; fret: number }[] = [];
    baseFret: number = 1;

    // For triad mode
    currentInversions: TriadInversion[] = [];

    // Track the currently playing inversion
    currentlyPlayingInversion: TriadInversion | null = null;

    constructor(
        private readonly audioService: AudioService,
        private readonly cdr: ChangeDetectorRef
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['diagramName'] || changes['diagramType'] || changes['selectedInversion']) {
            this.updateDiagram();

            // If autoPlay is enabled and we have inversions, play them
            if (this.autoPlay && this.hasInversions && this.currentInversions.length > 0) {
                // Load the instrument first (if not already loaded)
                this.audioService.loadInstrument().then(() => {
                    this.playAllInversions();
                });
            }
        }
    }

    /**
     * Play all inversions of the current triad sequentially
     */
    async playAllInversions(): Promise<void> {
        if (!this.currentInversions || this.currentInversions.length === 0) {
            console.warn('No inversions to play');
            this.playingComplete.emit();
            return;
        }

        try {
            // Play each inversion sequentially
            for (let i = 0; i < this.currentInversions.length; i++) {
                const inversion = this.currentInversions[i];

                // Set the currently playing inversion
                this.currentlyPlayingInversion = inversion;
                // Mark for check to update the UI
                this.cdr.detectChanges();

                await this.playInversion(inversion);

                // Add a small pause between inversions
                if (i < this.currentInversions.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }

            // Reset the currently playing inversion
            this.currentlyPlayingInversion = null;
            // Mark for check to update the UI
            this.cdr.detectChanges();

            // Emit event when all inversions have been played
            this.playingComplete.emit();
        } catch (error) {
            console.error('Error playing inversions:', error);
            // Reset the currently playing inversion in case of error
            this.currentlyPlayingInversion = null;
            // Mark for check to update the UI
            this.cdr.detectChanges();
            this.playingComplete.emit();
        }
    }

    /**
     * Play a single inversion
     */
    async playInversion(inversion: TriadInversion): Promise<void> {
        return this.audioService.playTriadFromPositions(
            inversion.positions,
            inversion.baseFret,
            0.8,  // Duration in seconds
            0.2   // Interval between notes in seconds (for arpeggio effect)
        );
    }

    getStringPosition(string: number): number {
        // Convert string number (1-6) to percentage position (0-100%)
        // String 1 is the high E string (rightmost)
        return (6 - string) * 20;
    }

    getFretPosition(fret: number): number {
        // Convert fret number to percentage position
        // Fret 0 is the nut, fret 1 is the first fret, etc.
        if (fret === 0) {
            return 0;
        }
        return fret * 20;
    }

    getBarreWidth(fromString: number, toString: number): number {
        // Calculate width of barre as percentage
        // Since we position the barre at toString (leftmost string),
        // we need to calculate the width from toString to fromString
        return (toString - fromString) * 20 + 20;
    }

    getMutedStrings(inversion: TriadInversion): number[] {
        return inversion.muted || [];
    }

    getOpenStrings(inversion: TriadInversion): number[] {
        const openStrings: number[] = [];
        for (let i = 1; i <= 6; i++) {
            const isPressed = inversion.positions.some(pos => pos.string === i);
            const isMuted = this.getMutedStrings(inversion).includes(i);

            if (!isPressed && !isMuted) {
                openStrings.push(i);
            }
        }
        return openStrings;
    }

    /**
     * Determine the note type (root, third, fifth) for a position in a triad inversion
     */
    getNoteType(position: FretboardPosition, inversion: TriadInversion): NoteType {
        if (!inversion || !inversion.positions || inversion.positions.length === 0) {
            return NoteType.Other;
        }

        // Extract the triad name from the diagramName (e.g., "C-triad" -> "C")
        const triadName = this.diagramName.replace(/-triad$/, '');

        // Determine if it's a minor triad
        const isMinor = triadName.endsWith('m');

        // Extract the root note
        const rootNote = isMinor ? triadName.slice(0, -1) : triadName;

        // Notes in chromatic order
        const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // Find the index of the root note in the chromatic scale
        const rootIndex = chromaticNotes.indexOf(rootNote);

        // Calculate the third and fifth intervals based on whether it's a major or minor triad
        const thirdInterval = isMinor ? 3 : 4;
        const fifthInterval = 7;

        // Calculate the indices of the third and fifth notes
        const thirdIndex = (rootIndex + thirdInterval) % 12;
        const fifthIndex = (rootIndex + fifthInterval) % 12;

        // Get the third and fifth notes
        const thirdNote = chromaticNotes[thirdIndex];
        const fifthNote = chromaticNotes[fifthIndex];

        // Get the actual note being played at this position
        const playedNote = this.getNoteAtPosition(position.string, position.fret, inversion.baseFret);

        // Determine the note type based on the played note
        if (playedNote === rootNote) {
            return NoteType.Root;
        } else if (playedNote === thirdNote) {
            return NoteType.Third;
        } else if (playedNote === fifthNote) {
            return NoteType.Fifth;
        } else {
            return NoteType.Other;
        }
    }

    /**
     * Get the actual note being played at a given position
     */
    getNoteAtPosition(string: number, fret: number, baseFret: number): string {
        // Standard tuning of a guitar (from 6th string to 1st string)
        const openStringNotes = ['E', 'A', 'D', 'G', 'B', 'E'];

        // Get the open string note (adjust for 1-based string numbering)
        const openNote = openStringNotes[6 - string];

        // Calculate the actual fret position (accounting for baseFret)
        const actualFret = fret + baseFret - 1;

        // Notes in chromatic order
        const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // Find the index of the open note in the chromatic scale
        const openNoteIndex = chromaticNotes.indexOf(openNote);

        // Calculate the played note index (wrapping around the chromatic scale)
        const playedNoteIndex = (openNoteIndex + actualFret) % 12;

        // Return the played note
        return chromaticNotes[playedNoteIndex];
    }

    /**
     * Determine the note type (root, third, fifth) for a position in a chord
     */
    getNoteTypeForChord(position: FretboardPosition, chordName: string): NoteType {

        // Extract the root note from the chord name (e.g., "C" from "C", "A" from "Am")
        const rootNote = chordName.replace(/m$/, '');

        // Determine if it's a minor chord
        const isMinor = chordName.endsWith('m');

        // Notes in chromatic order
        const chromaticNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // Find the index of the root note in the chromatic scale
        const rootIndex = chromaticNotes.indexOf(rootNote);

        // Calculate the third and fifth intervals based on whether it's a major or minor chord
        // Major chord: root + 4 semitones = third, root + 7 semitones = fifth
        // Minor chord: root + 3 semitones = third, root + 7 semitones = fifth
        const thirdInterval = isMinor ? 3 : 4;
        const fifthInterval = 7;

        // Calculate the indices of the third and fifth notes
        const thirdIndex = (rootIndex + thirdInterval) % 12;
        const fifthIndex = (rootIndex + fifthInterval) % 12;

        // Get the third and fifth notes
        const thirdNote = chromaticNotes[thirdIndex];
        const fifthNote = chromaticNotes[fifthIndex];

        // Get the actual note being played at this position
        const playedNote = this.getNoteAtPosition(position.string, position.fret, this.baseFret);

        // Determine the note type based on the played note
        if (playedNote === rootNote) {
            return NoteType.Root;
        } else if (playedNote === thirdNote) {
            return NoteType.Third;
        } else if (playedNote === fifthNote) {
            return NoteType.Fifth;
        } else {
            return NoteType.Other;
        }
    }

    /**
     * Get the CSS class for a note based on its type
     */
    getNoteClass(position: FretboardPosition, inversion?: TriadInversion): string {
        if (inversion) {
            // For triads with inversions
            const noteType = this.getNoteType(position, inversion);
            return `dot ${noteType}`;
        } else {
            // For chords, determine the note type based on the chord name and position
            const noteType = this.getNoteTypeForChord(position, this.diagramName);
            return `dot ${noteType}`;
        }
    }

    private updateDiagram(): void {
        let definition: ChordDefinition | undefined;

        // Determine which definition set to use based on diagramType
        if (this.diagramType === 'triad') {
            // For triads, use the triadDefinitions
            definition = triadDefinitions[this.diagramName];
        } else {
            // For chords, use the chordDefinitions
            definition = chordDefinitions[this.diagramName];
        }

        if (!definition) {
            console.warn(`Definition not found for: ${this.diagramName}`);
            return;
        }

        // Determine if we're dealing with a chord or triad
        this.hasInversions = this.diagramType === 'triad' || !!definition.inversions;

        if (this.hasInversions && definition.inversions) {
            // Triad mode
            if (this.selectedInversion == 'All Types') {
                // Show all inversions
                this.currentInversions = definition.inversions;
            } else {
                // Filter inversions based on the selected inversion
                this.currentInversions = definition.inversions.filter(inv => inv.inversionType === this.selectedInversion);
            }
        } else if (definition.positions) {
            // Chord mode
            this.currentPositions = definition.positions;
            this.baseFret = definition.baseFret ?? 1;
            this.barres = definition.barres || [];
            this.mutedStrings = definition.mutedStrings || [];

            // Find open strings (strings that are played but not pressed)
            this.openStrings = [];
            for (let i = 1; i <= 6; i++) {
                const isPressed = this.currentPositions.some(pos => pos.string === i);
                const isMuted = this.mutedStrings.includes(i);

                if (!isPressed && !isMuted) {
                    this.openStrings.push(i);
                }
            }
        }
    }
}
