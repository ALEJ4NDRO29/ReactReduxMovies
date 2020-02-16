import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { localStorageMiddleware, promiseMiddleware } from './middleware';
import reducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const myRouterMiddleware = routerMiddleware(history);

// Crear y aplicar middlewares
// Inspirado en la aplicación de ejemplo de thinkster
// https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/store.js
const getMiddleware = () => {
    const loggerMiddleware = createLogger();

    const middlewares = [promiseMiddleware, localStorageMiddleware, loggerMiddleware, myRouterMiddleware]; // [thunkMiddleware, apiMiddleware]

    return applyMiddleware(...middlewares);
};


const store = createStore(
    reducer, getMiddleware()
);

export default store;