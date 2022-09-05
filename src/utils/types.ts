export type Product = {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
}

export type CartItem = {
    product: Product;
    quantity: number
}