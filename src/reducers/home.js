import { HOME_LOADING } from "../constants";

export default (state = {}, action) => {
    switch (action.type) {
        case HOME_LOADING:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    }
}