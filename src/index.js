import { assign } from  'babel-polyfill';
import React from 'react';
import  { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();//pass a parameter if you want to overwrite the default params in the reducers

render(
    <Provider store={store}>
        routes
    </Provider>,
    document.getElementById('app')
);