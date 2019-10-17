import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppRouter from './AppRouter';

import CityKeysStore from './strores/CityKeysStore';
import CurrentSelectedCityStore from './strores/CurrentSelectedCityStore';
import FavoritesStore from './strores/FavoritesStore';
import FavoriteHomepageStore from './strores/FavoriteHomepageStore';

ReactDOM.render(
    <Provider
    CityKeysStore={CityKeysStore}
    CurrentSelectedCityStore={CurrentSelectedCityStore}
    FavoritesStore={FavoritesStore}
    FavoriteHomepageStore={FavoriteHomepageStore}
    >
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);
