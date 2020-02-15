import { MOVIE_DETAILS_LOADING, MOVIE_DETAILS_UNLOAD } from "../constants/constants";

export default (state = {}, action) => {
    switch (action.type) {
        case MOVIE_DETAILS_LOADING:
            return {
                ...state,
                movie: action.payload
            };
        case MOVIE_DETAILS_UNLOAD:
            delete state['movie']
            return {
                ...state,
            };
        default:
            return state;
    }
};