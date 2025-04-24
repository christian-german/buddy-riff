import { Injectable } from '@angular/core';
import { instrument, InstrumentName } from 'soundfont-player';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    private audioContext: AudioContext | null = null;
    private instrument: any = null;
    private isLoaded = false;

    constructor() {
        // Create AudioContext when needed to avoid autoplay policy issues
    }

    async loadInstrument(instrumentName: InstrumentName = 'acoustic_guitar_nylon'): Promise<void> {
        this.initAudioContext();

        if (!this.audioContext) {
            console.error('AudioContext could not be initialized');
            return;
        }

        try {
            this.instrument = await instrument(this.audioContext, instrumentName);
            this.isLoaded = true;
        } catch (error) {
            console.error('Failed to load instrument:', error);
            this.isLoaded = false;
        }
    }

    /**
     * Play a single note
     * @param note MIDI note name (e.g., 'C4', 'E3')
     * @param duration Duration in seconds
     * @param delay Delay before playing in seconds
     */
    playNote(note: string, duration: number = 1, delay: number = 0): Promise<void> {
        if (!this.isLoaded || !this.instrument) {
            console.warn('Instrument not loaded. Call loadInstrument first.');
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            // Convert delay to milliseconds
            const delayMs = delay * 1000;

            setTimeout(() => {
                this.instrument.play(note, 0, {duration});
                // Resolve after the note has finished playing
                setTimeout(resolve, duration * 1000);
            }, delayMs);
        });
    }

    /**
     * Play a sequence of notes (a chord or arpeggio)
     * @param notes Array of MIDI note names
     * @param duration Duration of each note in seconds
     * @param interval Time between notes in seconds (0 for chord, > 0 for arpeggio)
     */
    async playNotes(notes: string[], duration: number = 1, interval: number = 0): Promise<void> {
        if (!this.isLoaded || !this.instrument) {
            console.warn('Instrument not loaded. Call loadInstrument first.');
            return;
        }

        if (interval === 0) {
            // Play as a chord (all notes at once)
            notes.forEach(note => this.instrument.play(note, 0, {duration}));
            // Wait for the chord to finish
            await new Promise(resolve => setTimeout(resolve, duration * 1000));
        } else {
            // Play as an arpeggio (notes in sequence)
            for (let i = 0; i < notes.length; i++) {
                await this.playNote(notes[i], duration, i * interval);
            }
            // Wait for the last note to finish
            await new Promise(resolve => setTimeout(resolve, duration * 1000));
        }
    }

    /**
     * Map guitar string and fret position to MIDI note
     * @param string Guitar string number (1-6, where 1 is high E)
     * @param fret Fret number (0 for open string)
     * @param baseFret Base fret (for positions relative to a base fret)
     * @returns MIDI note name
     */
    mapPositionToNote(string: number, fret: number, baseFret: number = 1): string {
        // Standard tuning: E2, A2, D3, G3, B3, E4 (from 6th to 1st string)
        const openStringNotes = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'];

        // Get the open string note
        const openNote = openStringNotes[string - 1];
        if (!openNote) {
            console.warn(`Invalid string number: ${string}`);
            return '';
        }

        // Calculate the actual fret position
        const actualFret = fret + (baseFret - 1);

        // Calculate the MIDI note
        const noteName = openNote.slice(0, -1); // Remove octave
        const octave = parseInt(openNote.slice(-1));

        // Map of semitones from C for each note
        const noteMap: { [key: string]: number } = {
            'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
            'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8,
            'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11
        };

        // Calculate the new note
        const semitones = noteMap[noteName] + actualFret;
        const newOctave = octave + Math.floor(semitones / 12);
        const newNoteIndex = semitones % 12;

        // Convert back to note name
        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const newNoteName = noteNames[newNoteIndex];

        return `${newNoteName}${newOctave}`;
    }

    /**
     * Play a triad based on guitar positions
     * @param positions Array of positions (string, fret)
     * @param baseFret Base fret
     * @param duration Duration of each note in seconds
     * @param interval Time between notes in seconds (0 for chord, > 0 for arpeggio)
     */
    async playTriadFromPositions(
        positions: { string: number; fret: number }[],
        baseFret: number = 1,
        duration: number = 1,
        interval: number = 0.2
    ): Promise<void> {
        if (!this.isLoaded || !this.instrument) {
            await this.loadInstrument();
        }

        // Map positions to notes
        const notes = positions.map(pos =>
            this.mapPositionToNote(pos.string, pos.fret, baseFret)
        ).filter(note => note); // Filter out any empty notes

        // Play the notes
        await this.playNotes(notes, duration, interval);
    }

    /**
     * Stop all currently playing sounds
     */
    stopAll(): void {
        if (this.instrument) {
            this.instrument.stop();
        }
    }

    private initAudioContext(): void {
        this.audioContext ??= new AudioContext();
    }
}
