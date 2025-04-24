// Chord definitions for fretboard diagrams
import { ChordDefinition } from './interfaces';

export const chordDefinitions: { [key: string]: ChordDefinition } = {
    'C': {
        name: 'C Major',
        positions: [
            {string: 1, fret: 0},
            {string: 2, fret: 1, finger: 1},
            {string: 3, fret: 0},
            {string: 4, fret: 2, finger: 2},
            {string: 5, fret: 3, finger: 3}
        ],
        baseFret: 1,
        mutedStrings: [6]
    },
    'C#': {
        name: 'C# Major',
        positions: [
            {string: 1, fret: 4, finger: 4},
            {string: 2, fret: 2, finger: 2},
            {string: 3, fret: 1, finger: 1},
            {string: 4, fret: 3, finger: 3}
        ],
        baseFret: 4,
        mutedStrings: [5, 6]
    },
    'D': {
        name: 'D Major',
        positions: [
            {string: 1, fret: 2, finger: 2},
            {string: 2, fret: 3, finger: 3},
            {string: 3, fret: 2, finger: 1}
        ],
        baseFret: 1,
        mutedStrings: [5, 6]
    },
    'D#': {
        name: 'D# Major',
        positions: [
            {string: 1, fret: 3, finger: 3},
            {string: 2, fret: 4, finger: 4},
            {string: 3, fret: 3, finger: 2},
            {string: 4, fret: 1, finger: 1}
        ],
        baseFret: 3,
        mutedStrings: [5, 6]
    },
    'E': {
        name: 'E Major',
        positions: [
            {string: 1, fret: 0},
            {string: 2, fret: 0},
            {string: 3, fret: 1, finger: 1},
            {string: 4, fret: 2, finger: 2},
            {string: 5, fret: 2, finger: 3},
            {string: 6, fret: 0}
        ],
        baseFret: 1
    },
    'F': {
        name: 'F Major',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 1, finger: 1},
            {string: 3, fret: 2, finger: 2},
            {string: 4, fret: 3, finger: 3},
            {string: 5, fret: 3, finger: 4},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'F#': {
        name: 'F# Major',
        positions: [
            {string: 1, fret: 2, finger: 1},
            {string: 2, fret: 2, finger: 1},
            {string: 3, fret: 3, finger: 2},
            {string: 4, fret: 4, finger: 4},
            {string: 5, fret: 4, finger: 4},
            {string: 6, fret: 2, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 2}]
    },
    'G': {
        name: 'G Major',
        positions: [
            {string: 1, fret: 3, finger: 3},
            {string: 2, fret: 0},
            {string: 3, fret: 0},
            {string: 4, fret: 0},
            {string: 5, fret: 2, finger: 2},
            {string: 6, fret: 3, finger: 4}
        ],
        baseFret: 1
    },
    'G#': {
        name: 'G# Major',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 1, finger: 1},
            {string: 3, fret: 1, finger: 1},
            {string: 4, fret: 3, finger: 3},
            {string: 5, fret: 4, finger: 4},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 4,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'A': {
        name: 'A Major',
        positions: [
            {string: 1, fret: 0},
            {string: 2, fret: 2, finger: 2},
            {string: 3, fret: 2, finger: 3},
            {string: 4, fret: 2, finger: 4},
            {string: 5, fret: 0}
        ],
        baseFret: 1,
        mutedStrings: [6]
    },
    'A#': {
        name: 'A# Major',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 3, finger: 3},
            {string: 3, fret: 3, finger: 4},
            {string: 4, fret: 3, finger: 4},
            {string: 5, fret: 1, finger: 1},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'B': {
        name: 'B Major',
        positions: [
            {string: 1, fret: 2, finger: 1},
            {string: 2, fret: 4, finger: 3},
            {string: 3, fret: 4, finger: 4},
            {string: 4, fret: 4, finger: 4},
            {string: 5, fret: 2, finger: 1},
            {string: 6, fret: 2, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 2}]
    },
    // Minor chords
    'Cm': {
        name: 'C Minor',
        positions: [
            {string: 1, fret: 3, finger: 4},
            {string: 2, fret: 1, finger: 2},
            {string: 3, fret: 0},
            {string: 4, fret: 2, finger: 3},
            {string: 5, fret: 3, finger: 4}
        ],
        baseFret: 3,
        mutedStrings: [6],
        barres: [{fromString: 1, toString: 5, fret: 3}]
    },
    'C#m': {
        name: 'C# Minor',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 2, finger: 2},
            {string: 3, fret: 3, finger: 3},
            {string: 4, fret: 3, finger: 4},
            {string: 5, fret: 1, finger: 1},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 4,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'Dm': {
        name: 'D Minor',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 3, finger: 3},
            {string: 3, fret: 2, finger: 2},
            {string: 4, fret: 0}
        ],
        baseFret: 1,
        mutedStrings: [5, 6]
    },
    'D#m': {
        name: 'D# Minor',
        positions: [
            {string: 1, fret: 2, finger: 2},
            {string: 2, fret: 4, finger: 4},
            {string: 3, fret: 3, finger: 3},
            {string: 4, fret: 1, finger: 1}
        ],
        baseFret: 3,
        mutedStrings: [5, 6]
    },
    'Em': {
        name: 'E Minor',
        positions: [
            {string: 1, fret: 0},
            {string: 2, fret: 0},
            {string: 3, fret: 0},
            {string: 4, fret: 2, finger: 2},
            {string: 5, fret: 2, finger: 3},
            {string: 6, fret: 0}
        ],
        baseFret: 1
    },
    'Fm': {
        name: 'F Minor',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 1, finger: 1},
            {string: 3, fret: 1, finger: 1},
            {string: 4, fret: 3, finger: 3},
            {string: 5, fret: 3, finger: 4},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'F#m': {
        name: 'F# Minor',
        positions: [
            {string: 1, fret: 2, finger: 1},
            {string: 2, fret: 2, finger: 1},
            {string: 3, fret: 2, finger: 1},
            {string: 4, fret: 4, finger: 3},
            {string: 5, fret: 4, finger: 4},
            {string: 6, fret: 2, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 2}]
    },
    'Gm': {
        name: 'G Minor',
        positions: [
            {string: 1, fret: 3, finger: 3},
            {string: 2, fret: 3, finger: 4},
            {string: 3, fret: 3, finger: 4},
            {string: 4, fret: 5, finger: 4},
            {string: 5, fret: 5, finger: 4},
            {string: 6, fret: 3, finger: 3}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 3}]
    },
    'G#m': {
        name: 'G# Minor',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 1, finger: 1},
            {string: 3, fret: 1, finger: 1},
            {string: 4, fret: 3, finger: 3},
            {string: 5, fret: 3, finger: 4},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 4,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'Am': {
        name: 'A Minor',
        positions: [
            {string: 1, fret: 0},
            {string: 2, fret: 1, finger: 1},
            {string: 3, fret: 2, finger: 2},
            {string: 4, fret: 2, finger: 3},
            {string: 5, fret: 0}
        ],
        baseFret: 1,
        mutedStrings: [6]
    },
    'A#m': {
        name: 'A# Minor',
        positions: [
            {string: 1, fret: 1, finger: 1},
            {string: 2, fret: 2, finger: 2},
            {string: 3, fret: 3, finger: 3},
            {string: 4, fret: 3, finger: 4},
            {string: 5, fret: 1, finger: 1},
            {string: 6, fret: 1, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 1}]
    },
    'Bm': {
        name: 'B Minor',
        positions: [
            {string: 1, fret: 2, finger: 1},
            {string: 2, fret: 3, finger: 3},
            {string: 3, fret: 4, finger: 4},
            {string: 4, fret: 4, finger: 4},
            {string: 5, fret: 2, finger: 1},
            {string: 6, fret: 2, finger: 1}
        ],
        baseFret: 1,
        barres: [{fromString: 1, toString: 6, fret: 2}]
    }
};
