import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { THE_MOVIE_DB_API_URL } from './constants/constants';
import { THE_MOVIE_DB_API_KEY } from './constants/credentials';

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

const Movie =  {
    disover: () =>
        theMovieDbRequest.get('/discover/movie/'),
    details: (id) => 
        theMovieDbRequest.get(`/movie/${id}`),
    search: (query) => 
        //https://api.themoviedb.org/3/search/movie?api_key=fe7b53f09ed9cadcea9591ac81756c09&query=harry%20potter
        superagent.get(`${THE_MOVIE_DB_API_URL}/search/movie`).query({ 
                language: "es-ES",
                api_key: THE_MOVIE_DB_API_KEY,
                query: query
            }).then(responseBody),
}

export default {
    Movie
}