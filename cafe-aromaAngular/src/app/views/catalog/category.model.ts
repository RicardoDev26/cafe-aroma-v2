import { Product } from "./product.model";

export interface Category {
    id: 'all' | Product['category'];
    name: string;
}