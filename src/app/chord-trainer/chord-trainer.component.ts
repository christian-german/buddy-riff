import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FretboardDiagramComponent } from '../fretboard-diagram/fretboard-diagram.component';

@Component({
    selector: 'app-chord-trainer',
    standalone: true,
    imports: [CommonModule, FormsModule, FretboardDiagramComponent],
    templateUrl: './chord-trainer.component.html',
    styleUrls: ['./chord-trainer.component.css']
})
export class ChordTrainerComponent {
    isTraining = false;
    isPaused = false;
    currentChord = '';
    showSolution = false;
    progressValue = 0;
    delayTime = 10; // Default delay time in seconds
    private timer: any;
    private solutionTimer: any;
    private progressTimer: any;
    private pausedTimeRemaining = 0;
    private pauseStartTime = 0;
    private totalCycleTime = 0;

    // List of guitar chords
    private readonly chords = [
        'C', 'C#', 'D', 'D#', 'E', 'F',
        'F#', 'G', 'G#', 'A', 'A#', 'B',
        'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm',
        'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm'
    ];

    startTraining(): void {
        this.isTraining = true;
        this.isPaused = false;
        this.showNextChord();

        // Set up timer to show a new chord (delay time + 5 seconds to view solution)
        this.totalCycleTime = (this.delayTime + 5) * 1000;
        this.timer = setInterval(() => {
            this.showNextChord();
        }, this.totalCycleTime);
    }

    pauseTraining(): void {
        if (!this.isTraining || this.isPaused) {
            return;
        }

        this.isPaused = true;
        this.pauseStartTime = Date.now();

        // Clear timers
        if (this.timer) {
            clearInterval(this.timer);
        }

        if (this.solutionTimer) {
            // Calculate remaining time for solution timer
            if (!this.showSolution) {
                const elapsedTime = (this.progressValue / 100) * (this.delayTime * 1000);
                this.pausedTimeRemaining = this.delayTime * 1000 - elapsedTime;
            }
            clearTimeout(this.solutionTimer);
        }

        if (this.progressTimer) {
            clearInterval(this.progressTimer);
        }
    }

    resumeTraining(): void {
        if (!this.isTraining || !this.isPaused) {
            return;
        }

        this.isPaused = false;

        // If we were waiting for the solution to show
        if (!this.showSolution && this.pausedTimeRemaining > 0) {
            // Resume solution timer with remaining time
            this.solutionTimer = setTimeout(() => {
                this.showSolution = true;
            }, this.pausedTimeRemaining);

            // Resume progress timer
            const startTime = Date.now() - (this.progressValue / 100) * (this.delayTime * 1000);
            this.setupProgressTimer(startTime, this.delayTime * 1000);

            // Resume main timer
            const remainingCycleTime = this.totalCycleTime - (Date.now() - this.pauseStartTime);
            this.timer = setTimeout(() => {
                this.showNextChord();

                // Restart the interval timer for subsequent chords
                this.totalCycleTime = (this.delayTime + 5) * 1000;
                this.timer = setInterval(() => {
                    this.showNextChord();
                }, this.totalCycleTime);
            }, remainingCycleTime);
        }
        // If we were showing the solution
        else if (this.showSolution) {
            // Calculate remaining time to show the next chord
            const viewTime = 5 * 1000; // 5 seconds to view solution
            const elapsedViewTime = Date.now() - this.pauseStartTime;
            const remainingViewTime = Math.max(0, viewTime - elapsedViewTime);

            // Resume timer to show next chord
            this.timer = setTimeout(() => {
                this.showNextChord();

                // Restart the interval timer for subsequent chords
                this.totalCycleTime = (this.delayTime + 5) * 1000;
                this.timer = setInterval(() => {
                    this.showNextChord();
                }, this.totalCycleTime);
            }, remainingViewTime);
        }
    }

    stopTraining(): void {
        this.isTraining = false;
        this.isPaused = false;
        this.currentChord = '';
        this.showSolution = false;
        this.progressValue = 0;
        this.pausedTimeRemaining = 0;

        // Clear timers
        if (this.timer) {
            clearInterval(this.timer);
            clearTimeout(this.timer);
        }

        if (this.solutionTimer) {
            clearTimeout(this.solutionTimer);
        }

        if (this.progressTimer) {
            clearInterval(this.progressTimer);
        }
    }

    /**
     * Sets up the progress timer to update the progress bar
     * @param startTime The time when the timer started
     * @param totalTime The total time for the timer in milliseconds
     */
    private setupProgressTimer(startTime: number, totalTime: number): void {
        if (this.progressTimer) {
            clearInterval(this.progressTimer);
        }

        this.progressTimer = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            this.progressValue = Math.min((elapsedTime / totalTime) * 100, 100);

            // Stop updating progress when it reaches 100%
            if (this.progressValue >= 100) {
                clearInterval(this.progressTimer);
            }
        }, 100);
    }

    private showNextChord(): void {
        // Clear any existing solution timer and progress timer
        if (this.solutionTimer) {
            clearTimeout(this.solutionTimer);
        }

        if (this.progressTimer) {
            clearInterval(this.progressTimer);
        }

        // Hide solution, reset progress, and show a new random chord
        this.showSolution = false;
        this.progressValue = 0;
        this.currentChord = this.getRandomChord();

        // Convert delay time to milliseconds
        const delayTimeMs = this.delayTime * 1000;

        // Set timer to show solution after the specified delay time
        this.solutionTimer = setTimeout(() => {
            this.showSolution = true;
        }, delayTimeMs);

        // Set up progress timer to update every 100ms
        const startTime = Date.now();
        this.setupProgressTimer(startTime, delayTimeMs);

        // Update the total cycle time for the main timer
        this.totalCycleTime = (this.delayTime + 5) * 1000;
    }

    private getRandomChord(): string {
        const randomIndex = Math.floor(Math.random() * this.chords.length);
        return this.chords[randomIndex];
    }
}
