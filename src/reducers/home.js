import { HOME_LOADING, MOVIES_SEARCH, HOME_UNLOAD } from "../constants/constants";

export default (state = {}, action) => {
    switch (action.type) {
        case MOVIES_SEARCH:
        case HOME_LOADING:
            return {
                ...state,
                movies: action.payload
            }
        case HOME_UNLOAD:
            delete state['movies']
            return {
                ...state
            }
        default:
            return state
    }
}