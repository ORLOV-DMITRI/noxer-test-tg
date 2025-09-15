import React from 'react';
import './Header.css';
import CloseIcon from '../../../assets/svg/close.svg?react'
import TgIcon from '../../../assets/svg/tg.svg?react'
import ArrowIcon from '../../../assets/svg/arrow.svg?react'
import DotsIcon from '../../../assets/svg/dot.svg?react'
import SearchIcon from '../../../assets/svg/search.svg?react'

interface HeaderProps {
    onSearchToggle: () => void;
    channelName: string;
    searchTerm: string;
    onSearchChange: (term: string) => void;
    isSearchOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
    onSearchToggle, 
    channelName, 
    searchTerm, 
    onSearchChange, 
    isSearchOpen 
}) => {
    return (
        <header className="header">
            <div className="header__top">
                <button className="header__close">
                    <CloseIcon/>
                    <span>Закрыть</span>
                </button>
                <div className="header__channel">
                    <TgIcon/>
                    <span>{channelName}</span>
                </div>
                <div className="header__menu">
                    <ArrowIcon/>
                    <DotsIcon/>
                </div>
            </div>
            <div className="header__search">
                {isSearchOpen ? (
                    <div className="search-bar search-bar--active">
                        <button className="search-bar__back" onClick={onSearchToggle}>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/>
                            </svg>
                        </button>
                        <input
                            type="text"
                            className="search-bar__input"
                            placeholder="Найти товары"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            autoFocus
                        />
                    </div>
                ) : (
                    <button className="search-bar" onClick={onSearchToggle}>
                       <SearchIcon/>
                        <span className="search-bar__placeholder">Найти товары</span>
                    </button>
                )}
            </div>
        </header>
    );
};