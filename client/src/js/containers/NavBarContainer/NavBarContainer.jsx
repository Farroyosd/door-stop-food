import React from 'react';
import { Link } from 'react-router-dom';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <div className="navBar">
          <ul>
            <li ><a className="navLogo" href="#home">Door Stop Food</a></li>
            <li ><a className="navLogIn" data-toggle="modal" data-target="#exampleModalCenter">
              Login</a>
            </li>
          </ul>
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
                      <input className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                    <button type="button" 
                      className="btn btn-primary form-control" 
                      data-dismiss="modal" 
                      aria-label="Close">
                      Login
                    </button>
                    </div>
                    <div className="form-group pt-3">
                    <button type="button" 
                      className="btn btn-primary form-control" 
                      href= {`#/signup/`}>
                      Sign Up
                    </button>
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