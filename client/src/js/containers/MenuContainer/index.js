import { connect } from 'react-redux';
import MenuContainer from './MenuContainer';


function mapStoreToProps(store) {
  return {
    movieData: store.movieSearch.movieData
  };
}


export default connect(mapStoreToProps)(MenuContainer);