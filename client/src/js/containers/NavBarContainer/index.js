import { connect } from 'react-redux';
import NavBarContainer from './NavBarContainer';


function mapStoreToProps(store) {
  return {
    searchData: store.searchData.address
  };
}


export default connect(mapStoreToProps)(NavBarContainer);