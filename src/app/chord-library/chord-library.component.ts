import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FretboardDiagramComponent } from '../fretboard-diagram/fretboard-diagram.component';
import { ChordDefinition, TriadInversionType } from '../definitions/interfaces';
import { chordDefinitions } from '../definitions/chord-definitions';
import { triadDefinitions } from '../definitions/triad-definitions';

@Component({
    selector: 'app-chord-library',
    standalone: true,
    imports: [CommonModule, FormsModule, FretboardDiagramComponent],
    templateUrl: './chord-library.component.html',
    styleUrls: ['./chord-library.component.css']
})
export class ChordLibraryComponent implements OnInit {
    chordDefinitions: { [key: string]: ChordDefinition } = {};
    triadDefinitions: { [key: string]: ChordDefinition } = {};
    filteredChords: string[] = [];
    filteredTriads: string[] = [];
    chordRows: string[][] = [];
    triadRows: string[][] = [];
    filterText: string = '';
    showChords: boolean = true;
    showTriads: boolean = true;
    columnsPerRow: number = 4;

    // Inversion filter options
    inversionOptions: (TriadInversionType | 'All Types')[] = ['All Types', TriadInversionType.RootPosition, TriadInversionType.FirstInversion, TriadInversionType.SecondInversion];
    selectedInversion: (TriadInversionType | 'All Types') = 'All Types';

    ngOnInit(): void {
        this.chordDefinitions = chordDefinitions;
        this.triadDefinitions = triadDefinitions;
        this.updateFilteredLists();
    }

    updateFilteredLists(): void {
        // Filter chords
        this.filteredChords = Object.keys(this.chordDefinitions)
            .filter(key => {
                if (!this.showChords) return false;
                if (!this.filterText) return true;
                return key.toLowerCase().includes(this.filterText.toLowerCase()) ||
                    this.chordDefinitions[key].name.toLowerCase().includes(this.filterText.toLowerCase());
            });

        // Filter triads
        this.filteredTriads = Object.keys(this.triadDefinitions)
            .filter(key => {
                if (!this.showTriads) return false;
                if (!this.filterText) return true;
                return key.toLowerCase().includes(this.filterText.toLowerCase()) ||
                    this.triadDefinitions[key].name.toLowerCase().includes(this.filterText.toLowerCase());
            });

        // Create 2D arrays for table display
        this.chordRows = this.createRows(this.filteredChords);
        this.triadRows = this.createRows(this.filteredTriads);
    }

    createRows(items: string[]): string[][] {
        const rows: string[][] = [];
        for (let i = 0; i < items.length; i += this.columnsPerRow) {
            rows.push(items.slice(i, i + this.columnsPerRow));
        }
        return rows;
    }

    applyFilter(): void {
        this.updateFilteredLists();
    }

    toggleChords(): void {
        this.showChords = !this.showChords;
        this.updateFilteredLists();
    }

    toggleTriads(): void {
        this.showTriads = !this.showTriads;
        this.updateFilteredLists();
    }

    changeInversionFilter(inversion: (TriadInversionType | 'All Types')): void {
        this.selectedInversion = inversion;
        this.updateFilteredLists();
    }
}
