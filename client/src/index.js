import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppRouter from './AppRouter';

import CityKeysStore from './strores/CityKeysStore';
import CurrentSelectedCityStore from './strores/CurrentSelectedCityStore';
import CurrentCityTemperatureStore from './strores/CurrentCityTemperatureStore';

ReactDOM.render(
    <Provider
    CityKeysStore={CityKeysStore}
    CurrentSelectedCityStore={CurrentSelectedCityStore}
    CurrentCityTemperatureStore={CurrentCityTemperatureStore}
    >
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);
