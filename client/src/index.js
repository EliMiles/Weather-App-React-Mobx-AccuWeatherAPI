import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import AppRouter from './AppRouter';
import TodosStore from './strores/TodosStore';


ReactDOM.render(
    <Provider TodosStore={TodosStore}>
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);
