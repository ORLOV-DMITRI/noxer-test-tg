import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Banner.css';
import BannerImg from '../../../assets/img/banner.png'

interface BannerSlide {
    id: number;
    image: string;
    link: string;
}

const bannerSlides: BannerSlide[] = [
    {
        id: 1,
        image: BannerImg,
        link: '#'
    },
    {
        id: 2,
        image: BannerImg,
        link: '#'
    },
    {
        id: 3,
        image: BannerImg,
        link: '#'
    },
    {
        id: 4,
        image: BannerImg,
        link: '#'
    }
];

export const Banner: React.FC = () => {
    return (
        <div className="banner">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ 
                    clickable: true,
                    bulletClass: 'banner__dot',
                    bulletActiveClass: 'banner__dot--active'
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="banner__swiper"
            >
                {bannerSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <a href={slide.link} className="banner__slide">
                            <div className="banner__image">
                                <img src={slide.image} alt={`Banner ${slide.id}`} />
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};