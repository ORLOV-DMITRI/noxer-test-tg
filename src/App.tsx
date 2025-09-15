import  { useState } from 'react';
import { Header } from './components/Layout/Header/Header';
import { Navigation } from './components/Layout/Navigation/Navigation';
import { HomePage } from './components/Home/HomePage/HomePage';
import { SearchPage } from './components/Search/SearchPage/SearchPage';
import TgBgIcon from './assets/svg/tgBg.svg?react'

import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="app">
            <Header
                onSearchToggle={() => setIsSearchOpen(!isSearchOpen)}
                channelName="наш tg-канал"
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                isSearchOpen={isSearchOpen}
            />

            <main className="app__content">
                {isSearchOpen ? (
                    <SearchPage 
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />
                ) : (
                    <>
                        {activeTab === 'home' && <HomePage />}
                        {activeTab === 'catalog' && <div>Каталог</div>}
                        {activeTab === 'favorites' && <div>Избранное</div>}
                        {activeTab === 'cart' && <div>Корзина</div>}
                        {activeTab === 'profile' && <div>Профиль</div>}
                    </>
                )}
            </main>
            <footer className={'footer'}>
                <div className={'footer__text'}>Разработано на платформе Noxer</div>
                <div className={'footer__block'}>
                    <TgBgIcon/>
                    <span>noxerai_bot</span>
                </div>
            </footer>

            <Navigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </div>
    );
}

export default App;