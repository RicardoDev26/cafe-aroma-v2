import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPrincipalComponent } from '../../components/button-principal/button-principal.component';

@Component({
  selector: 'app-home',
  imports: [ButtonPrincipalComponent],
  standalone: true, 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
