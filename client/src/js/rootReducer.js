import { combineReducers } from 'redux';
import HomeReducer from './containers/HomeContainer/homeReducer';


const rootReducer = combineReducers({
    movieSearch: HomeReducer,
    
});

export default rootReducer;
