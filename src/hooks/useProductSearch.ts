import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/client';
import type {Product} from '../api/types';
import { useDebounce } from './useDebounce';

export const useProductSearch = (searchTerm: string) => {
    const debouncedSearch = useDebounce(searchTerm, 300);

    return useQuery({
        queryKey: ['products', 'search', debouncedSearch],
        queryFn: async () => {
            if (!debouncedSearch) return [];

            const [mainResponse, catalogResponse] = await Promise.all([
                apiClient.get('/products', { params: { on_main: true } }),
                apiClient.get('/products', { params: { on_main: false, per_page: 50, page: 1 } })
            ]);

            const allProducts: Product[] = [
                ...mainResponse.data.products,
                ...catalogResponse.data.products
            ];

            const searchLower = debouncedSearch.toLowerCase();

            return allProducts.filter(product => {
                if (product.Product_Name.toLowerCase().includes(searchLower)) return true;

                if (product.tags?.some(tag => tag.toLowerCase().includes(searchLower))) return true;

                if (product.categories?.some(cat =>
                    cat.Category_Name.toLowerCase().includes(searchLower)
                )) return true;

                return false;
            });
        },
        enabled: debouncedSearch.length > 0,
    });
};