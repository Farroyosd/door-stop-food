import React from 'react';
import { getSearchData } from './homeActions';
import { Link } from 'react-router-dom';
import NavBarContainer from '../NavBarContainer';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomeSearch = this.handleHomeSearch.bind(this);
  }

  componentDidMount() {
    var input = document.getElementById('homeSearchBar');
    var options = {
      componentRestrictions: {
        country: 'us'
      }
    };
    new google.maps.places.Autocomplete(input, options);
  }

  handleHomeSearch() {
    const { dispatch } = this.props;
    var search = document.getElementById('homeSearchBar');

    dispatch(getSearchData(search));

  }

  render() {
    return (
        <div className="homeDiv">
        <NavBarContainer/>
          <div className="homeHeaderDiv">
            <h1>Door Stop Food</h1>
          </div>
          <div className="searchDiv">
            <form>
              <div className="form-row">
                <div className="col">
                  <div className="input-group">
                    <input type="text" id="homeSearchBar" className="form-control" placeholder="Let's find you something to eat" aria-label="Search for..." />
                    <span className="input-group-btn">
                      <Link to="/searchresults"><button className="btn btn-success" type="button" onClick={this.handleHomeSearch} >></button></Link>
                    </span>
                  </div>
                </div>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default HomeContainer;