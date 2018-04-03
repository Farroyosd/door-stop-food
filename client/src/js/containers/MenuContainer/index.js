import { connect } from 'react-redux';
import MenuContainer from './MenuContainer';

function mapStoreToProps(store) {
  return {
    searchData: store.searchData.address,
    shoppingCart: store.itemData.shoppingCart,
    incrementer: store.itemData.quantity,
    userLogin: store.userInfo.userLogin
  };
}


export default connect(mapStoreToProps)(MenuContainer);