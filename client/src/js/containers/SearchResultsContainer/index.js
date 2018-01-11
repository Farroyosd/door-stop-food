import { connect } from 'react-redux';
import SearchResultsContainer from './SearchResultsContainer';


function mapStoreToProps(store) {
  return {
    movieData: store.movieSearch.movieData
  };
}


export default connect(mapStoreToProps)(SearchResultsContainer);