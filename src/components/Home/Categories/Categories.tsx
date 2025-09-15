import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import type {Category} from '../../../api/types';
import './Categories.css';

interface CategoriesProps {
    categories: Category[];
    onCategorySelect: (category: Category) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ categories, onCategorySelect }) => {
    const displayCategories = categories
        .filter(cat => cat.Category_Image)
        .sort((a, b) => a.sort_order - b.sort_order)
        .slice(0, 10);

    return (
        <div className="categories">
            <Swiper
                modules={[FreeMode]}
                spaceBetween={12}
                slidesPerView={5}
                freeMode={true}
                className="categories__swiper"
            >
                {displayCategories.map(category => (
                    <SwiperSlide key={category.Category_ID}>
                        <button
                            className="category-item"
                            onClick={() => onCategorySelect(category)}
                        >
                            <div className="category-item__image">
                                <img src={category.Category_Image} alt={category.Category_Name} />
                            </div>
                            <span className="category-item__name">{category.Category_Name}</span>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};