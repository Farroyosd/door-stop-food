import React from 'react';
import { Link } from 'react-router-dom';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div className="navBar">
        <ul>
          <li ><a className="navLogo" href="#home">Door Stop Food</a></li>
          <li ><a className="navLogIn" href="#about">Log in</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBarContainer;