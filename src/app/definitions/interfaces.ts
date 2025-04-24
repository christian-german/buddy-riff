/**
 * Represents a position on the fretboard for guitar.
 *
 * This interface defines the combination of a fret and string on which a
 * note is played, and optionally includes the finger used to play it.
 */
export interface FretboardPosition {
    fret: number;
    string: number;
    finger?: number;
}

/**
 * Different types of triad inversions.
 */
export enum TriadInversionType {
    RootPosition = 'Root Position',
    FirstInversion = 'First Inversion',
    SecondInversion = 'Second Inversion'
}

/**
 * Represents an inversion on the fretboard for a triad.
 *
 * This interface defines the structure for a triad inversion,
 * including its type, positions, and additional details like muted strings and barre details.
 */
export interface TriadInversion {
    inversionType: TriadInversionType;
    positions: FretboardPosition[];
    baseFret: number;
    muted?: number[];
    barres?: { fromString: number; toString: number; fret: number }[];
}

/**
 * Represents the definition of a chord on the fretboard, including its name, positions, inversions, and other details.
 */
export interface ChordDefinition {
    name: string;
    inversions?: TriadInversion[];
    positions?: FretboardPosition[];
    baseFret?: number;
    barres?: { fromString: number; toString: number; fret: number }[];
    mutedStrings?: number[];
}
