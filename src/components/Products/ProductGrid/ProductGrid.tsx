import React from 'react';
import type {Product} from '../../../api/types';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductGrid.css';

interface ProductGridProps {
    products: Product[];
    onProductSelect: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductSelect }) => {
    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard
                    key={product.Product_ID}
                    product={product}
                    onSelect={() => onProductSelect(product)}
                />
            ))}
        </div>
    );
};