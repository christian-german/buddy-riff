import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/chord-trainer', pathMatch: 'full'},
    {path: 'chord-trainer', loadComponent: () => import('./chord-trainer/chord-trainer.component').then(m => m.ChordTrainerComponent)},
    {path: 'triad-trainer', loadComponent: () => import('./triad-trainer/triad-trainer.component').then(m => m.TriadTrainerComponent)},
    {path: 'chord-library', loadComponent: () => import('./chord-library/chord-library.component').then(m => m.ChordLibraryComponent)},
    {path: '**', redirectTo: '/chord-trainer'}
];
