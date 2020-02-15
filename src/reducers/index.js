import { combineReducers } from "redux";

import home from './home';
import movie from './movie';

export default combineReducers({
    home,
    movie,
});