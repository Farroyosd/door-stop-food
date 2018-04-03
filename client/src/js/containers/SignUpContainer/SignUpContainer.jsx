import React from 'react';
import { Link } from 'react-router-dom';
import { 
  updateSignUpInputFirstName,
  updateSignUpInputLastName,
  updateSignUpInputUsername,
  updateSignUpInputEmail,
  updateSignUpInputPassword,
  updateSignUpInputPhoneNumber,
  updateSignUpLinkToCustomer,
  updateSignUpLinkToOwner,
  postCustomerData,
        } from './signUpActions';
import NavBarContainer from '../NavBarContainer';
import {loggedInUser} from '../NavbarContainer/navbarActions';
var signUpPageBoolean = false;
var nextPageLink = "/";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostUser = this.handlePostUser.bind(this);
    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
    this.handleInputUsername = this.handleInputUsername.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.handleInputPhoneNumber = this.handleInputPhoneNumber.bind(this);
    this.handleChangeFalse = this.handleChangeFalse.bind(this);
    this.handleChangeTrue = this.handleChangeTrue.bind(this);
    this.handleNavbar =this.handleNavbar.bind(this);

  }
  handleInputFirstName(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSignUpInputFirstName(value));
  };
  handleInputLastName(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSignUpInputLastName(value));
  };
  handleInputUsername(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSignUpInputUsername(value));
  };
  handleInputEmail(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSignUpInputEmail(value));
  };
  handleInputPassword(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSignUpInputPassword(value));
  };
  handleInputPhoneNumber(e){
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSignUpInputPhoneNumber(value));
  };



  handlePostUser(e) {
    e.preventDefault();
    const { dispatch, firstName, lastName, username, email, password, phoneNumber } = this.props;
    var signUpUserObj = {
      "first_name": firstName,
      "last_name": lastName,
      "username": username,
      "email": email,
      "password": password,
      "phone_number": phoneNumber,
      "restaurant_owner": signUpPageBoolean
    }

   dispatch(postCustomerData(signUpUserObj));

  };



  handleChangeFalse(){
    const { dispatch } = this.props;
    signUpPageBoolean = false;
    var nextPageLink = "/";

    dispatch(updateSignUpLinkToCustomer(nextPageLink));
    
  };
  handleChangeTrue(){
    const { dispatch } = this.props;
    signUpPageBoolean = true;
    var nextPageLink = "/restaurantownerpage";
    
    dispatch(updateSignUpLinkToOwner(nextPageLink));
  };
 
  handleNavbar() {
    const { dispatch } = this.props;
    const ownerPage = 3;
    dispatch(loggedInUser(ownerPage))
  }


  render() {
    const { firstName, lastName, username, email, password, phoneNumber, userObj , signUpLink } = this.props;
    

  
    return (
      <div className="signUpBG">
      <NavBarContainer />
        <div className='signup'>
          <form onSubmit={this.handlePostUser}>
            <input className="signUpInput" type='text' placeholder='First:*' value={firstName} onChange={this.handleInputFirstName}/>
            <input className="signUpInput" type='text' placeholder='Last:*' value={lastName} onChange={this.handleInputLastName}/>
            <input className="signUpInput" type='text' placeholder='Email:' value={email} onChange={this.handleInputEmail}/>
            <input className="signUpInput" type='text' placeholder='Phone:*' value={phoneNumber} onChange={this.handleInputPhoneNumber}/>
            <input className="signUpInput" type='text' placeholder='Username:*' value={username} onChange={this.handleInputUsername}/>
            <input className="signUpInput" type='password' placeholder='Password:*' value={password} onChange={this.handleInputPassword}/>
            <div className="signUpRadioDiv">
              <span>Are you a Restaurant Owner?</span>
              <input type="radio" name="switch"  onClick={this.handleChangeFalse} defaultChecked />
              <label>No</label>
              <input type="radio" name="switch"  onClick={this.handleChangeTrue} />
              <label>Yes</label>
            </div>
            <Link to={signUpLink}><button type="submit" className="signUpBtn" onClick={this.handleNavbar}>SIGN UP</button></Link>
          </form>
        </div>

      </div>
    );
  }
}

export default SignUpContainer;