import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { rootReducer, initialState } from './store/redusers'
import './index.css';
import App from './components/App';

const store = createStore(rootReducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
