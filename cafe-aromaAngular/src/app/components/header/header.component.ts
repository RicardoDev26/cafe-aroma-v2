import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavigationItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = false;

  navigationItems: NavigationItem[] = [
    { id: '/', label: 'Inicio' },
    { id: '/catalog', label: 'Catálogo' },
    { id: '/promotions', label: 'Promociones' },
    { id: '/testimonials', label: 'Testimonios' },
    { id: '/contact', label: 'Contacto' },
  ];

  constructor(private router: Router) {}

  handleNavigation(path: string) {
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
