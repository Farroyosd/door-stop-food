import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';


function mapStoreToProps(store) {
 return {
   searchData: store.searchData.address
 };
}


export default connect(mapStoreToProps)(HomeContainer);