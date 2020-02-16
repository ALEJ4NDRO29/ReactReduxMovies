// Middleware para recoger los datos en las llamadas a API
// De este modo evitar crear un fichero de actions

// Inspirado en la aplicación de ejemplo de thinkster
// https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/middleware.js
const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {

        action.payload.then(
            res => {
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                action.error = true;
                action.payload = error.response.body;
                store.dispatch(action);
            }
        );

        return;
    }

    next(action);
};

const localStorageMiddleware = store => next => action => {
    next(action);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware };

