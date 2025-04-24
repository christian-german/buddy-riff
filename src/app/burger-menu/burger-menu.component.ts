import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-burger-menu',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './burger-menu.component.html',
    styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent {
    isMenuOpen = false;

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }
}
