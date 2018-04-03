import React from 'react';
import { Link } from 'react-router-dom';
import {
  updateUserName,
  updatePassword,
  loggedInUser
} from './navbarActions';


class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
  };
this.handleUserNameInput = this.handleUserNameInput.bind(this)
this.handlePasswordInput = this.handlePasswordInput.bind(this)
this.handleLoggedInUser = this.handleLoggedInUser.bind(this)
this.handleLogoutUser = this.handleLogoutUser.bind(this)
this.handleSignUpUser = this.handleSignUpUser.bind(this)
this.toggleMenu = this.toggleMenu.bind(this);
  }

handleUserNameInput(e) {
// dispatch was provided by connect()
  const { dispatch } = this.props;
  const { value } = e.target;
  dispatch(updateUserName(value));
}

handlePasswordInput(e) {
  const { dispatch } = this.props;
  const { value } = e.target;
  dispatch(updatePassword(value));
  }

handleLoggedInUser(e) {
  const { dispatch } = this.props;
  const login = 2;
  dispatch(loggedInUser(login))
}

handleLogoutUser(e) {
  const { dispatch } = this.props;
  const logout = 1
  const clearUserName = ""
  const clearPassWord = ""
  dispatch(loggedInUser(logout))
  dispatch(updateUserName(clearUserName))
  dispatch(updatePassword(clearPassWord))
}

handleSignUpUser(e) {
  const { dispatch } = this.props;
  const signUp = 4
  dispatch(loggedInUser(signUp))
}

toggleMenu() {
  this.setState({ isOpen: !this.state.isOpen });
}


renderNavBarLogin() {
  const { userLogin, username, password } = this.props
  const cartClass = this.state.isOpen ? 'open' : 'close';

  console.log("userlogin", userLogin);
  if (userLogin === 1) {
    return (<div className="navBar">
    <ul>
      <li>
        <a className="navLogo" href="/">
            Door Stop Food
        </a>
      </li>
      <li
        className="pr-4 text-white"
        ><a className="navLogIn" 
              data-toggle="modal" 
              data-target="#exampleModalCenter">
              Login
          </a>
      </li>
    </ul>
  </div>)
  }
  if (userLogin === 2) {
    return (<div className="navBar bg-inverse text-white">
    <div className="dropdown">
    <ul>
      <li ><a className="navLogo" href="/">Door Stop Food</a></li>
      <li className="pr-4"
          >
      <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     {username}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={this.handleLogoutUser}>Logout</a>
      </div>
      </li>
    </ul>
    </div>
  </div>)
  }
  if (userLogin === 3) {
    return (<div className="navBar bg-danger">
    <ul>
      <li ><a className="navLogo" href="/">Door Stop Food</a></li>
      <li ><a className="navLogIn">
        Owner</a>
      </li>
    </ul>
  </div>)
  }
  if (userLogin === 4) {
    return (<div className="navBar bg-success">
    <ul>
      <li ><a className="navLogo" href="/">Door Stop Food</a></li>
    </ul>
  </div>)
  }
}


  render() {
    const { userLogin, username, password } = this.props
    return (
      <div>
      <div>
        {this.renderNavBarLogin()}
        </div>
        <div className="login">
          <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Sign-In</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control"
                              onChange={this.handleUserNameInput}
                              value= {username}
                              placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input className="form-control"
                              onChange={this.handlePasswordInput}
                              value={password}
                              type="password" 
                              placeholder="Password" />
                    </div>
                    <div className="form-group">
                    <button type="button"
                      onClick={this.handleLoggedInUser} 
                      className="btn btn-primary form-control" 
                      data-dismiss="modal" 
                      aria-label="Close">
                      Login
                    </button>
                    </div>
                    <div className="form-group pt-3">
                    <Link to="/signup">
                    <button type="submit"
                      onClick= {this.handleSignUpUser}
                      className="btn btn-primary form-control"
                      aria-label="Close"                    
                      >
                      Sign Up
                    </button>
                    </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default NavBarContainer;