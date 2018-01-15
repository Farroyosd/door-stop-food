import { connect } from 'react-redux';
import SignUpContainer from './SignUpContainer';


function mapStoreToProps(store) {
  return {
    firstName: store.signInData.firstName,
    lastName: store.signInData.lastName,
    username: store.signInData.username,
    email:store.signInData.email,
    password: store.signInData.password,
    phoneNumber: store.signInData.phoneNumber,
    signUpLink: store.signInData.signUpLink,
    userObj: store.signInData.userObj
  };
}


export default connect(mapStoreToProps)(SignUpContainer);