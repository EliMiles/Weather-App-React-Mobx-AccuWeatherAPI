import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import header from './components/header';
import homePage from './pages/homePage';
import favoritesPage from './pages/favoritesPage';

import './style.css';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={header} />
                    <Route exact path="/" component={homePage} />
                    <Route exact path="/favorites" component={favoritesPage} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;