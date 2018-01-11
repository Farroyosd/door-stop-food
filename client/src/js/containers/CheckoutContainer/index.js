import { connect } from 'react-redux';
import CheckoutContainer from './CheckoutContainer';


function mapStoreToProps(store) {
  return {
    movieData: store.movieSearch.movieData
  };
}


export default connect(mapStoreToProps)(CheckoutContainer);