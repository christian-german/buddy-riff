import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FretboardDiagramComponent } from '../fretboard-diagram/fretboard-diagram.component';

@Component({
    selector: 'app-triad-trainer',
    standalone: true,
    imports: [CommonModule, FormsModule, FretboardDiagramComponent],
    templateUrl: './triad-trainer.component.html',
    styleUrls: ['./triad-trainer.component.css']
})
export class TriadTrainerComponent {
    isTraining = false;
    isPaused = false;
    currentTriad = '';
    showSolution = false;
    progressValue = 0;
    delayTime = 10; // Default delay time in seconds
    private timer: any;
    private solutionTimer: any;
    private progressTimer: any;
    private waitingForTriadPlayback = false;
    private pausedTimeRemaining = 0;
    private pauseStartTime = 0;

    // List of guitar triads
    private readonly triads = [
        'C', 'C#', 'D', 'D#', 'E', 'F',
        'F#', 'G', 'G#', 'A', 'A#', 'B',
        'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm',
        'F#m', 'Gm', 'G#m', 'Am', 'A#m', 'Bm'
    ];

    startTraining(): void {
        this.isTraining = true;
        this.isPaused = false;
        this.showNextTriad();

        // We'll set up the timer in onTriadPlayingComplete
        // This ensures we only move to the next triad after all inversions have been played
    }

    /**
     * Called when all triad inversions have been played
     */
    onTriadPlayingComplete(): void {
        if (!this.waitingForTriadPlayback) {
            return;
        }

        this.waitingForTriadPlayback = false;

        // Set up timer to show a new triad after 5 seconds
        const viewTime = 5 * 1000; // 5 seconds to view solution after playback
        this.timer = setTimeout(() => {
            this.showNextTriad();
        }, viewTime);
    }

    pauseTraining(): void {
        if (!this.isTraining || this.isPaused) {
            return;
        }

        this.isPaused = true;
        this.pauseStartTime = Date.now();

        // Clear timers
        if (this.timer) {
            clearTimeout(this.timer);
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
                this.waitingForTriadPlayback = true;
            }, this.pausedTimeRemaining);

            // Resume progress timer
            const startTime = Date.now() - (this.progressValue / 100) * (this.delayTime * 1000);
            this.setupProgressTimer(startTime, this.delayTime * 1000);
        }
        // If we were showing the solution and waiting for playback
        else if (this.showSolution && this.waitingForTriadPlayback) {
            // Nothing to do, just wait for playback to complete
        }
        // If we were waiting to show the next triad
        else if (this.showSolution && !this.waitingForTriadPlayback) {
            // Resume timer to show next triad
            const viewTime = 5 * 1000; // 5 seconds to view solution after playback
            this.timer = setTimeout(() => {
                this.showNextTriad();
            }, viewTime);
        }
    }

    stopTraining(): void {
        this.isTraining = false;
        this.isPaused = false;
        this.currentTriad = '';
        this.showSolution = false;
        this.progressValue = 0;
        this.waitingForTriadPlayback = false;
        this.pausedTimeRemaining = 0;

        // Clear timers
        if (this.timer) {
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

    private showNextTriad(): void {
        // Clear any existing solution timer and progress timer
        if (this.solutionTimer) {
            clearTimeout(this.solutionTimer);
        }

        if (this.progressTimer) {
            clearInterval(this.progressTimer);
        }

        if (this.timer) {
            clearTimeout(this.timer);
        }

        // Reset the waiting flag
        this.waitingForTriadPlayback = false;

        // Hide solution, reset progress, and show a new random triad
        this.showSolution = false;
        this.progressValue = 0;
        this.currentTriad = this.getRandomTriad();

        // Convert delay time to milliseconds
        const delayTimeMs = this.delayTime * 1000;

        // Set timer to show solution after the specified delay time
        this.solutionTimer = setTimeout(() => {
            this.showSolution = true;
            // Set the waiting flag to true when the solution is shown
            // This will be reset to false when all inversions have been played
            this.waitingForTriadPlayback = true;
        }, delayTimeMs);

        // Set up progress timer to update every 100ms
        const startTime = Date.now();
        this.setupProgressTimer(startTime, delayTimeMs);
    }

    private getRandomTriad(): string {
        const randomIndex = Math.floor(Math.random() * this.triads.length);
        return this.triads[randomIndex];
    }
}
