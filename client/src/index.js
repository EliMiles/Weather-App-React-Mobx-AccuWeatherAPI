import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppRouter from './AppRouter';
import TodosStore from './strores/TodosStore';
import CityKeysStore from './strores/CityKeysStore';
import CurrentSelectedCityStore from './strores/CurrentSelectedCityStore';

ReactDOM.render(
    <Provider
    TodosStore={TodosStore}
    CityKeysStore={CityKeysStore}
    CurrentSelectedCityStore={CurrentSelectedCityStore}
    >
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);
