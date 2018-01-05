import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';


function mapStoreToProps(store) {
  return {
    movieDataDetails: store.movieDetail.movieDataDetails,
    
  };
}


export default connect(mapStoreToProps)(MovieDetailContainer);