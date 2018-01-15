import React, { Component } from 'react';
import {
  Switch, HashRouter as Router,
  Route
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import MenuContainer from './containers/MenuContainer';
import CheckoutContainer from './containers/CheckoutContainer'
import SignUpContainer from './containers/SignUpContainer'
import '../css/style.less';
import FooterContainer from './containers/FooterContainer';

import '../css/style.less';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className=''>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/searchresults' component={SearchResultsContainer} />
            <Route path='/checkout' component={CheckoutContainer} />
            <Route path='/menu' component={MenuContainer} />
            <Route path='/signup' component={SignUpContainer} />
            <Route path='/:id' component={MenuContainer} /> 
          </Switch>
          <FooterContainer />
        </div>
      </Router>
    );
  }
}
