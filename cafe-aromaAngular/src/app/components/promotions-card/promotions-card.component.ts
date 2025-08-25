import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotions-card',
  standalone: true,
  imports: [],
  templateUrl: './promotions-card.component.html',
  styleUrl: './promotions-card.component.css'
})
export class PromotionsCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
}
