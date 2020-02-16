import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { THE_MOVIE_DB_API_URL } from './constants/constants';
import { THE_MOVIE_DB_API_KEY } from './constants/credentials';

// Fichero para comunicar con la API themoviedb

// Inspirado en la aplicación de ejemplo de thinkster
// https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/agent.js

const superagent = superagentPromise(_superagent, global.Promise);
const responseBody = res => res.body;

// Llamadas a la api de themoviedb añadiendo la api key
const theMovieDbRequest = {
    del: url => 
        superagent.del(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
    get: url =>
        superagent.get(`${THE_MOVIE_DB_API_URL}${url}`).query({ language: "es-ES", api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
    put: url =>
        superagent.put(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
    post: url =>
        superagent.post(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
}

// LLamadas para recuperar las películas
const Movie =  {
    disover: () => // Listado en el home
        theMovieDbRequest.get('/discover/movie/'),
    details: (id) => // Recuperar detalles de una peĺicula
        theMovieDbRequest.get(`/movie/${id}`),
    search: (query) => // Buscador
        superagent.get(`${THE_MOVIE_DB_API_URL}/search/movie`).query({ 
                language: "es-ES",
                api_key: THE_MOVIE_DB_API_KEY,
                query: query
            }).then(responseBody),
}

export default {
    Movie
}