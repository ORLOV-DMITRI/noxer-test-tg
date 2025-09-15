import React from 'react';
import { useMainProducts } from '../../../api/products';
import { Banner } from '../Banner/Banner';
import { Categories } from '../Categories/Categories';
import { ProductGrid } from '../../Products/ProductGrid/ProductGrid';
import { LoadingSpinner } from '../../UI/LoadingSpinner/LoadingSpinner';
import './HomePage.css';

export const HomePage: React.FC = () => {
    const { data, isLoading, error } = useMainProducts();

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div className="error">Ошибка загрузки данных</div>;
    if (!data) return null;

    const handleProductSelect = () => {
    };

    const handleCategorySelect = () => {
    };

    return (
        <div className="home-page">
            <Banner />
            <Categories
                categories={data.categories}
                onCategorySelect={handleCategorySelect}
            />
            <ProductGrid
                products={data.products}
                onProductSelect={handleProductSelect}
            />
        </div>
    );
};