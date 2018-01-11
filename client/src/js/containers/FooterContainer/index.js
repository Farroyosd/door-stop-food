import { connect } from 'react-redux';
import FooterContainer from './FooterContainer';


function mapStoreToProps(store) {
    return {
      searchData: store.searchData.address
    };
  }


export default connect(mapStoreToProps)(FooterContainer);