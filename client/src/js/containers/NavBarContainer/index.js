import { connect } from 'react-redux';
import NavBarContainer from './NavBarContainer';


function mapStoreToProps(store) {
  return {
  username: store.userInfo.username,
  password: store.userInfo.password,
  userLogin: store.userInfo.userLogin
  };
}


export default connect(mapStoreToProps)(NavBarContainer);