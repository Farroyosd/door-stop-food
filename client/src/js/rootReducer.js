import { combineReducers } from 'redux';
import HomeReducer from './containers/HomeContainer/homeReducer';


const rootReducer = combineReducers({
    searchData: HomeReducer,
    
});

export default rootReducer;
