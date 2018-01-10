import React from 'react';
import { getMovieData } from './homeActions';
import { Link } from 'react-router-dom';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <div className="homeDiv">
          <div className="navBar">
            <ul>
              <li ><a className="navLogo" href="#home">Door Stop Food</a></li>
              <li ><a className="navLogIn" href="#about">Log in</a></li>
            </ul>
          </div>
          <div className="searchDiv">
            <form>
              <div className="form-row">
                <div className="col">
                  <div className="input-group">
                    <input type="text" id="foodSearch" className="form-control" placeholder="Let's find you something to eat" aria-label="Search for..." />
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" >></button>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default HomeContainer;