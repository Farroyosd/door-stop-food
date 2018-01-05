import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearchContainer/movieSearchReducer';
import MovieDetailReducer from './containers/MovieDetailContainer/movieDetailReducer';

const rootReducer = combineReducers({
    movieSearch: MovieSearchReducer,
    movieDetail: MovieDetailReducer
});

export default rootReducer;
