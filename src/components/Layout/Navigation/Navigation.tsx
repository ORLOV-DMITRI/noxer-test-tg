import React from 'react';
import './Navigation.css';
import NavIcon1 from '../../../assets/svg/nav1.svg?react'
import NavIcon2 from '../../../assets/svg/nav2.svg?react'
import NavIcon3 from '../../../assets/svg/nav3.svg?react'
import NavIcon4 from '../../../assets/svg/nav4.svg?react'
import NavIcon5 from '../../../assets/svg/nav5.svg?react'

interface NavigationProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
    return (
        <nav className="navigation">
            <button
                className={`navigation__item ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => onTabChange('home')}
            >
               <NavIcon1/>
            </button>

            <button
                className={`navigation__item ${activeTab === 'catalog' ? 'active' : ''}`}
                onClick={() => onTabChange('catalog')}
            >
                <NavIcon2/>
            </button>

            <button
                className={`navigation__item ${activeTab === 'favorites' ? 'active' : ''}`}
                onClick={() => onTabChange('favorites')}
            >
                <NavIcon3/>
            </button>

            <button
                className={`navigation__item ${activeTab === 'cart' ? 'active' : ''}`}
                onClick={() => onTabChange('cart')}
            >
                <NavIcon4/>
            </button>

            <button
                className={`navigation__item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => onTabChange('profile')}
            >
                <NavIcon5/>
            </button>
        </nav>
    );
};