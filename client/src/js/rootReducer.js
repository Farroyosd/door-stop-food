import { combineReducers } from 'redux';
import HomeReducer from './containers/HomeContainer/homeReducer';
import SignUpReducer from './containers/SignUpContainer/signUpReducer';


const rootReducer = combineReducers({
    searchData: HomeReducer,
    signInData: SignUpReducer,
    
});

export default rootReducer;
