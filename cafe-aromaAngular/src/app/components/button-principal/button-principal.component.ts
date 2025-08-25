import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-principal',
  imports: [CommonModule],
  templateUrl: './button-principal.component.html',
  styleUrls: ['./button-principal.component.css']
})
export class ButtonPrincipalComponent {
  @Input() title!: string;
  @Input() className: string = '';

  @Output() clickEvent = new EventEmitter<void>()

  onClick() {
    this.clickEvent.emit();
  }
}
