import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div className=''> 
        <Route exact path='/' component={ HomeContainer } />
      </div>
    </Router>
    );
  }
}
