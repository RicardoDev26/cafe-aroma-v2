import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonPrincipalComponent } from '../../components/button-principal/button-principal.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [ButtonPrincipalComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
