import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, BurgerMenuComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // The app component is now just a shell that contains the router outlet
    // All functionality has been moved to feature components
}
