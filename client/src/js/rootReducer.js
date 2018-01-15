import { combineReducers } from 'redux';
import HomeReducer from './containers/HomeContainer/homeReducer';
import SignUpReducer from './containers/SignUpContainer/signUpReducer';
import NavbarReducer from './containers/NavBarContainer/navbarReducer';

import menuReducer from './containers/MenuContainer/menuReducer.js'

const rootReducer = combineReducers({
    searchData: HomeReducer,
    signInData: SignUpReducer,
    userInfo: NavbarReducer,
    itemData: menuReducer
});

export default rootReducer;
