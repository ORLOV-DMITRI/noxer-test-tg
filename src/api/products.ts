
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { apiClient } from './client';
import type { ProductsResponse } from './types';

export const productKeys = {
    all: ['products'] as const,
    main: () => [...productKeys.all, 'main'] as const,
    catalog: (page: number) => [...productKeys.all, 'catalog', page] as const,
    search: (query: string) => [...productKeys.all, 'search', query] as const,
};

export const useMainProducts = () => {
    return useQuery({
        queryKey: productKeys.main(),
        queryFn: async () => {
            const { data } = await apiClient.get<ProductsResponse>('/products', {
                params: { on_main: true }
            });
            return data;
        },
        staleTime: 5 * 60 * 1000,
    });
};

export const useCatalogProducts = () => {
    return useInfiniteQuery({
        queryKey: productKeys.all,
        queryFn: async ({ pageParam = 1 }) => {
            const { data } = await apiClient.get<ProductsResponse>('/products', {
                params: {
                    on_main: false,
                    per_page: 50,
                    page: pageParam
                }
            });
            return data;
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.pagination.has_next) {
                return lastPage.pagination.current_page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });
};