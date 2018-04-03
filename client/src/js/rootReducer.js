import { combineReducers } from 'redux';
import HomeReducer from './containers/HomeContainer/homeReducer';
import SignUpReducer from './containers/SignUpContainer/signUpReducer';
import NavbarReducer from './containers/NavBarContainer/navbarReducer';
import RestaurantOwnerPageReducer from './containers/RestaurantOwnerPageContainer/restaurantOwnerPageReducer';
import AddMenuItemsReducer from './containers/AddMenuItemsContainer/addMenuItemsReducer';

import menuReducer from './containers/MenuContainer/menuReducer.js'

const rootReducer = combineReducers({
    searchData: HomeReducer,
    signInData: SignUpReducer,
    userInfo: NavbarReducer,
    itemData: menuReducer,
    restaurantOwnerData: RestaurantOwnerPageReducer,
    menuItemData: AddMenuItemsReducer
    
});

export default rootReducer;
