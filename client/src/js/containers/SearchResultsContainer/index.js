import { connect } from 'react-redux';
import SearchResultsContainer from './SearchResultsContainer';


function mapStoreToProps(store) {
  return {
    searchData: store.searchData.address
  };
}


export default connect(mapStoreToProps)(SearchResultsContainer);