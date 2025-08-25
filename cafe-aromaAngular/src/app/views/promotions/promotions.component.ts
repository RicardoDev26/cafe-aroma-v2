import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PromotionsCardComponent } from '../../components/promotions-card/promotions-card.component';
import { Observable } from 'rxjs';
import { Promotion } from './promotion.model';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [PromotionsCardComponent, CommonModule],
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
  promotions$: Observable<Promotion[]>;

  private promotionService: EntityCollectionService<Promotion>;

  constructor(
    private router: Router,
    entityServiceFactory: EntityCollectionServiceFactory
  ) {
    this.promotionService = entityServiceFactory.create<Promotion>('Promotion');
    this.promotions$ = this.promotionService.entities$;
  }

  ngOnInit() {
    this.promotionService.getAll();
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
