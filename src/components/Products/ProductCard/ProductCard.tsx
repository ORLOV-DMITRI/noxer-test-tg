import React from 'react';
import type {Product} from '../../../api/types';
import { getProductPrice } from '../../../utils/price';
import './ProductCard.css';
import LikeIcon from '../../../assets/svg/like.svg?react'

interface ProductCardProps {
    product: Product;
    onSelect: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
    const { price, oldPrice, discount } = getProductPrice(product);
    const mainImage = product.images.find(img => img.MainImage) || product.images[0];

    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <img
                    src={mainImage?.Image_URL}
                    alt={product.Product_Name}
                    className="product-card__image"
                    loading="lazy"
                />
                <button className="product-card__favorite">
                    <LikeIcon/>
                </button>
                <div className="product-card__badges">
                    {product.marks?.map(mark => (
                        <span
                            key={mark.Mark_ID}
                            className={`badge badge--${mark.Mark_Name.toLowerCase()}`}
                        >
              {mark.Mark_Name === 'sale' && 'SALE'}
                            {mark.Mark_Name === 'new' && 'NEW'}
                            {mark.Mark_Name === 'hit' && 'ХИТ'}
                            {mark.Mark_Name === 'premium' && 'ПРЕМИУМ'}
                            {mark.Mark_Name === 'hot' && 'HOT'}
                            {mark.Mark_Name === 'discount' && `${discount}%`}
            </span>
                    ))}
                </div>
            </div>

            <div className="product-card__info">
                <div className="product-card__price">
                    <span className="product-card__price-current">{price.toLocaleString()} ₽</span>
                    {oldPrice && (
                        <>
                            <span className="product-card__price-old">{oldPrice.toLocaleString()} ₽</span>
                            <span className="product-card__discount">-{discount}%</span>
                        </>
                    )}
                </div>
                <h3 className="product-card__title">{product.Product_Name}</h3>
                <button className="product-card__button" onClick={onSelect}>
                    Выбрать
                </button>
            </div>
        </div>
    );
};