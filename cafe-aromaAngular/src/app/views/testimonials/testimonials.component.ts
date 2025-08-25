import { Component, OnInit } from '@angular/core';
import { Testimony } from './testimonials.model';
import { AddTestimonyCardComponent } from '../../components/add-testimony-card/add-testimony-card.component';
import { CommonModule } from '@angular/common';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AddTestimonyCardComponent, CommonModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit {
  testimonios$: Observable<Testimony[]>;
  loading$: Observable<boolean>;
  private testimonyService: EntityCollectionService<Testimony>;

  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.testimonyService = serviceFactory.create<Testimony>('Testimonials');
    this.testimonios$ = this.testimonyService.entities$;
    this.loading$ = this.testimonyService.loading$;
  }

  ngOnInit() {
    this.testimonyService.getAll();
  }

  handleAddTestimony(newTestimony: Testimony) {
    this.testimonyService.add(newTestimony).subscribe({
      next: created => console.log('Testimonio creado:', created),
      error: err => console.error('Error creando testimonio:', err)
    });
  }
}
