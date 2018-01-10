import { connect } from 'react-redux';
import HomeContainer from './HomeContainer';


function mapStoreToProps(store) {
  return {
    movieData: store.movieSearch.movieData
  };
}


export default connect(mapStoreToProps)(HomeContainer);