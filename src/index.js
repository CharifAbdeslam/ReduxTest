import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import App from './components/App';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const store = applyMiddleware(thunk)(createStore)
ReactDOM.render(
    <Provider store={store(reducers)}>
    <App />
    </Provider>,
    document.getElementById('root')
);
