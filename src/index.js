import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import App from './components/App';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(
reducers,
compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            ))
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
