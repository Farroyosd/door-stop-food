import { connect } from 'react-redux';
import AddMenuItemsContainer from './AddMenuItemsContainer';


function mapStoreToProps(store) {
  return {
    menuItemName: store.menuItemData.menuItemName,
    menuItemPrice: store.menuItemData.menuItemPrice,
    menuItemDescription: store.menuItemData.menuItemDescription,
    menuItemCategory: store.menuItemData.menuItemCategory,
    menuArray: store.menuItemData.menuArray,
    restaurantObj: store.restaurantOwnerData.restaurantObj,
    userObj: store.signInData.userObj,
  };
}


export default connect(mapStoreToProps)(AddMenuItemsContainer);