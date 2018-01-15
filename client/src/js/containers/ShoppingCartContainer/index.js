import { connect } from 'react-redux';
import ShoppingCartContainer from './ShoppingCartContainer';

function mapStoreToProps(store) {
  return {
    searchData: store.searchData.address
  };
}


export default connect(mapStoreToProps)(ShoppingCartContainer);