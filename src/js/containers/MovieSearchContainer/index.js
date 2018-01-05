import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';


function mapStoreToProps(store) {
  return {
    movieData: store.movieSearch.movieData
  };
}


export default connect(mapStoreToProps)(MovieSearchContainer);