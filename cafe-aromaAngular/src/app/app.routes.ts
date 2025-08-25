import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PromotionsComponent } from './views/promotions/promotions.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'promotions', component: PromotionsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'contact', component: ContactComponent},
];
