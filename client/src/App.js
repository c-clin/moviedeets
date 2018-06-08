import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import Discover from './containers/Discover/Discover';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/discover" component={Discover} />
          <Route path="/" component={Home} />
          <Redirect to={'/'} />
        </Switch>
      </div>
    );
  }
}

export default App;
