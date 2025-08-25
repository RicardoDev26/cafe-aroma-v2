import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() name!: string;
@Input() description!: string;
@Input() price!: string;
@Input() imageUrl!: string;

}
