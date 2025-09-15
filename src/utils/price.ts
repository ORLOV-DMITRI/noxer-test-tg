import type {Product} from '../api/types';

export interface ProductPriceInfo {
    price: number;
    oldPrice: number | null;
    discount: number;
}

export function getProductPrice(product: Product): ProductPriceInfo {
    const selectedParam = product.parameters?.find(p => p.chosen) || product.parameters?.[0];

    if (!selectedParam) {
        return {
            price: 0,
            oldPrice: null,
            discount: 0
        };
    }

    const price = selectedParam.price;
    const oldPrice = selectedParam.old_price;

    let discount = 0;
    if (oldPrice && oldPrice > price) {
        discount = Math.round(((oldPrice - price) / oldPrice) * 100);
    }

    if (product.colors?.length > 0) {
        const colorDiscount = Math.max(...product.colors.map(c => c.discount || 0));
        if (colorDiscount > discount) {
            discount = colorDiscount;
        }
    }

    return {
        price,
        oldPrice,
        discount
    };
}

export function formatPrice(price: number): string {
    return price.toLocaleString('ru-RU');
}

export function getMainImage(product: Product): string {
    const mainImage = product.images.find(img => img.MainImage);
    if (mainImage) return mainImage.Image_URL;

    return product.images[0]?.Image_URL || '/placeholder.png';
}

export function getAllProductImages(product: Product): string[] {
    const images: string[] = [];

    product.images?.forEach(img => {
        if (img.Image_URL) images.push(img.Image_URL);
    });

    product.colors?.forEach(color => {
        if (color.Color_image) images.push(color.Color_image);
        color.json_data?.add_images?.forEach((img: { image_url?: string }) => {
            if (img.image_url) images.push(img.image_url);
        });
    });

    product.parameters?.forEach(param => {
        if (param.extra_field_image) images.push(param.extra_field_image);
        param.parameter_json?.add_images?.forEach((url: string) => {
            if (url) images.push(url);
        });
    });

    return [...new Set(images)];
}

export function getBadgeLabel(markName: string): string {
    const labels: Record<string, string> = {
        'sale': 'SALE',
        'new': 'NEW',
        'hit': 'ХИТ',
        'premium': 'ПРЕМИУМ',
        'discount': 'СКИДКА',
        'hot': 'HOT'
    };

    return labels[markName] || markName.toUpperCase();
}