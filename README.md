# Guitar Chord Trainer

An Angular application to help guitar players practice their chords. The app displays a random guitar chord and shows the chord diagram after a 10-second delay.

## Features

- Displays random guitar chords (C, C#, D, D#, etc.) in a large font
- Shows chord diagrams after a 10-second delay
- Start and stop buttons to control the practice session
- Supports both major and minor chords

## How to Use

1. Click the "Start" button to begin the chord training session
2. A random chord will be displayed in the center of the screen
3. Try to form the chord on your guitar within 10 seconds
4. After 10 seconds, the chord diagram will be displayed showing the correct finger positions
5. A new chord will appear every 15 seconds (10 seconds to practice + 5 seconds to view the solution)
6. Click the "Stop" button to end the training session

## Development

This project was generated with Angular CLI version 19.0.5.

### Prerequisites

- Node.js (v22.9.0 or higher)
- npm (v10.8.3 or higher)
- Angular CLI (v19.0.5 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

Run the development server:
```
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Building for Production

To build the application for production:
```
ng build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License.
