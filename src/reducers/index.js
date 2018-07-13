import { combineReducers } from 'redux';
import movieReducer from './movie_reducer';
import userReducer from './user_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer,
    form: formReducer
});

export default rootReducer;
