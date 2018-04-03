import { connect } from 'react-redux';
import CheckoutContainer from './CheckoutContainer';


function mapStoreToProps(store) {
  return {
    searchData: store.searchData.address
  };
}


export default connect(mapStoreToProps)(CheckoutContainer);