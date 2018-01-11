import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import MenuContainer from './containers/MenuContainer';
import '../css/style.less';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div className=''> 
        <Route exact path='/' component={ HomeContainer } />
        <Route exact path='/searchresults' component={ SearchResultsContainer } />
        <Route exact path='/menu' component={ MenuContainer } />
      </div>
    </Router>
    );
  }
}
