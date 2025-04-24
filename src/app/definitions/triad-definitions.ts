// Triad definitions for fretboard diagrams
import { ChordDefinition, TriadInversionType } from './interfaces';

export const triadDefinitions: { [key: string]: ChordDefinition } = {
    'C-triad': {
        name: 'C Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2},
                    {string: 5, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 0},
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 0}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'C#-triad': {
        name: 'C# Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 3, finger: 3},
                    {string: 5, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 2, finger: 1},
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'D-triad': {
        name: 'D Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 2, finger: 1},
                    {string: 4, fret: 0},
                    {string: 5, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 2, finger: 1},
                    {string: 4, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 2, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'D#-triad': {
        name: 'D# Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 1, finger: 1},
                    {string: 5, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 3, finger: 3},
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'E-triad': {
        name: 'E Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 2, finger: 2},
                    {string: 5, fret: 2, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 0},
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 0},
                    {string: 2, fret: 0},
                    {string: 3, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'F-triad': {
        name: 'F Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 3, finger: 3},
                    {string: 5, fret: 3, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'F#-triad': {
        name: 'F# Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 4, finger: 4},
                    {string: 5, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'G-triad': {
        name: 'G Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 0},
                    {string: 4, fret: 0},
                    {string: 5, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 0},
                    {string: 4, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 3, finger: 3},
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 0}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'G#-triad': {
        name: 'G# Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 1, finger: 1},
                    {string: 5, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 4, finger: 4},
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'A-triad': {
        name: 'A Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 2, finger: 3},
                    {string: 5, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 0},
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 2, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 0},
                    {string: 2, fret: 0},
                    {string: 3, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'A#-triad': {
        name: 'A# Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 3, finger: 4},
                    {string: 5, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 3, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'B-triad': {
        name: 'B Major Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 4, finger: 4},
                    {string: 4, fret: 4, finger: 4},
                    {string: 5, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 4, finger: 4},
                    {string: 4, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    // Minor triads
    'Cm-triad': {
        name: 'C Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 1, finger: 1},
                    {string: 5, fret: 3, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 0},
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'C#m-triad': {
        name: 'C# Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2},
                    {string: 5, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 0}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'Dm-triad': {
        name: 'D Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 0},
                    {string: 5, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'D#m-triad': {
        name: 'D# Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 1, finger: 1},
                    {string: 5, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'Em-triad': {
        name: 'E Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2},
                    {string: 5, fret: 2, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 0},
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 0},
                    {string: 2, fret: 0},
                    {string: 3, fret: 0}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'Fm-triad': {
        name: 'F Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 3, finger: 3},
                    {string: 5, fret: 3, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'F#m-triad': {
        name: 'F# Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 4, finger: 4},
                    {string: 5, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'Gm-triad': {
        name: 'G Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 0},
                    {string: 5, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 3, finger: 3},
                    {string: 4, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 3, finger: 3},
                    {string: 2, fret: 3, finger: 3},
                    {string: 3, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'G#m-triad': {
        name: 'G# Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 4, finger: 4},
                    {string: 4, fret: 1, finger: 1},
                    {string: 5, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 4, finger: 4},
                    {string: 4, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 4, finger: 4},
                    {string: 2, fret: 4, finger: 4},
                    {string: 3, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'Am-triad': {
        name: 'A Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2},
                    {string: 5, fret: 0}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 0},
                    {string: 3, fret: 0},
                    {string: 4, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 0},
                    {string: 2, fret: 0},
                    {string: 3, fret: 0}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'A#m-triad': {
        name: 'A# Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 3, finger: 3},
                    {string: 5, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 1, finger: 1},
                    {string: 4, fret: 3, finger: 3}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 1, finger: 1},
                    {string: 2, fret: 1, finger: 1},
                    {string: 3, fret: 1, finger: 1}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    },
    'Bm-triad': {
        name: 'B Minor Triad',
        inversions: [
            {
                inversionType: TriadInversionType.RootPosition,
                positions: [
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 4, finger: 4},
                    {string: 5, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [1, 2, 6]
            },
            {
                inversionType: TriadInversionType.FirstInversion,
                positions: [
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 2, finger: 2},
                    {string: 4, fret: 4, finger: 4}
                ],
                baseFret: 1,
                muted: [1, 5, 6]
            },
            {
                inversionType: TriadInversionType.SecondInversion,
                positions: [
                    {string: 1, fret: 2, finger: 2},
                    {string: 2, fret: 2, finger: 2},
                    {string: 3, fret: 2, finger: 2}
                ],
                baseFret: 1,
                muted: [4, 5, 6]
            }
        ]
    }
};
