import { connect } from 'react-redux';
import RestaurantOwnerPageContainer from './RestaurantOwnerPageContainer';


function mapStoreToProps(store) {
  return {
    restaurantName : store.restaurantOwnerData.restaurantName,
    address : store.restaurantOwnerData.address,
    hours : store.restaurantOwnerData.hours,
    phone : store.restaurantOwnerData.phone,
    description : store.restaurantOwnerData.description,
    picture : store.restaurantOwnerData.picture,
    foodType : store.restaurantOwnerData.foodType,
    waitTimes: store.restaurantOwnerData.waitTimes,
    menuItemName: store.restaurantOwnerData.menuItemName,
    menuItemPrice: store.restaurantOwnerData.menuItemPrice,
    menuItemDescription: store.restaurantOwnerData.menuItemDescription,
    menuItemCategory: store.restaurantOwnerData.menuItemCategory,
    menuArray: store.restaurantOwnerData.menuArray,
    restaurantObj: store.restaurantOwnerData.restaurantObj,
    userObj: store.signInData.userObj,
  };
}


export default connect(mapStoreToProps)(RestaurantOwnerPageContainer);