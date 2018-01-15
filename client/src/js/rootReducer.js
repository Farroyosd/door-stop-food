import { combineReducers } from 'redux';
import HomeReducer from './containers/HomeContainer/homeReducer';
import SignUpReducer from './containers/SignUpContainer/signUpReducer';
import NavbarReducer from './containers/NavBarContainer/navbarReducer';


const rootReducer = combineReducers({
    searchData: HomeReducer,
    signInData: SignUpReducer,
    userInfo: NavbarReducer
});

export default rootReducer;
