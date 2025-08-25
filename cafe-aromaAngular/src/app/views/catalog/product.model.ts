export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    category: 'coffee' | 'tes' | 'bakery' | 'desserts';
}