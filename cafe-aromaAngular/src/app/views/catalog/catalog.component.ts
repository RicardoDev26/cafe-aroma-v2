import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';
import { Category } from './category.model';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products$: Observable<Product[]>;
  private productService: EntityCollectionService<Product>;

  categories: Category[] = [
    { id: 'all', name: 'Todos los productos' },
    { id: 'coffee', name: 'Cafés' },
    { id: 'tes', name: 'Tés' },
    { id: 'bakery', name: 'Panadería' },
    { id: 'desserts', name: 'Postres' }
  ];

  selectedCategory: Category['id'] = 'all';
  currentPage: number = 1;
  readonly itemsPerPage: number = 6;

  constructor(entityServiceFactory: EntityCollectionServiceFactory) {
    this.productService = entityServiceFactory.create<Product>('Product');
    this.products$ = this.productService.entities$;
    this.productService.getAll();
  }

  filteredProducts(products: Product[]): Product[] {
    return products
      ? this.selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === this.selectedCategory)
      : [];
  }

  currentProducts(products: Product[]): Product[] {
    const filtered = this.filteredProducts(products);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  get totalPages$(): Observable<number> {
    return this.products$.pipe(
      map(products => Math.ceil(this.filteredProducts(products).length / this.itemsPerPage))
    );
  }

  handleCategoryChange(categoryId: Category['id']): void {
    this.selectedCategory = categoryId;
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  previousPage(): void {
    this.currentPage = Math.max(this.currentPage - 1, 1);
  }

  nextPage(products: Product[]): void {
    const totalPages = Math.ceil(this.filteredProducts(products).length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage + 1, totalPages);
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  max(a: number, b: number): number {
    return Math.max(a, b);
  }

  get selectedCategoryName(): string {
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category ? category.name : '';
  }
}
