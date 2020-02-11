import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { THE_MOVIE_DB_API_URL } from './constants';
import { THE_MOVIE_DB_API_KEY } from './credentials';

const superagent = superagentPromise(_superagent, global.Promise);
const responseBody = res => res.body;

// Llamadas a la api de themoviedb añadiendo la api key
const theMovieDbRequest = {
    del: url => 
        superagent.del(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
    get: url =>
        superagent.get(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
    put: url =>
        superagent.put(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody),
    post: url =>
        superagent.post(`${THE_MOVIE_DB_API_URL}${url}`).query({ api_key: THE_MOVIE_DB_API_KEY }).then(responseBody)
}

const Movie =  {
    disover: () =>
        theMovieDbRequest.get('/discover/movie/')
}

export default {
    Movie
}