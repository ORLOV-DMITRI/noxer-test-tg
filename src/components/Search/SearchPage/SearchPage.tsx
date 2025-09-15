import React from 'react';
import {useProductSearch} from '../../../hooks/useProductSearch';
import {ProductGrid} from '../../Products/ProductGrid/ProductGrid';
import './SearchPage.css';
import SearchIcon from '../../../assets/svg/search.svg?react'

interface SearchPageProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const FREQUENT_SEARCHES = [
    'наушники',
    'кроссовки',
    'рюкзак',
    'техника',
    'одежда',
    'сладости'
];

export const SearchPage: React.FC<SearchPageProps> = ({searchTerm, onSearchChange}) => {
    const {data: searchResults, isLoading} = useProductSearch(searchTerm);

    return (
        <div className="search-page">

            {!searchTerm && (
                <div className="search-page__frequent">
                    <h3 className="search-page__frequent-title">Часто ищут</h3>
                    <div className="search-page__frequent-tags">
                        {FREQUENT_SEARCHES.map((term) => (
                            <button
                                key={term}
                                className="search-page__frequent-tag"
                                onClick={() => onSearchChange(term)}
                            >
                                <SearchIcon/>
                                <span className={'search-page__frequent-tagName'}>   {term}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {searchTerm && (
                <div className="search-page__results">
                    {isLoading ? (
                        <div className="search-page__loading">Поиск...</div>
                    ) : searchResults && searchResults.length > 0 ? (
                        <ProductGrid
                            products={searchResults}
                            onProductSelect={() => {}}
                        />
                    ) : (
                        <div className="search-page__empty">
                            Ничего не найдено по запросу "{searchTerm}"
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};