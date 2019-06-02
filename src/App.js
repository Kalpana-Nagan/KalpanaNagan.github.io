import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import HomePage from './Home/containers/HomePage';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="*" component={NotFound}/>
            <Redirect to="/" />
        </Switch>
        );
  }
}

export default App;
