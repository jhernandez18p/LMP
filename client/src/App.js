import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import createHistory from "history/createBrowserHistory";

// Assets
import './index.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Mantenimiento from './components/Mantenimiento';

// Pages
import Base from './pages/Base';

class App extends Component {

  render() {
    return (
      <Switch>
          <Route path="/front" component={ Base } />
          <Route exact path="" component={ Mantenimiento } />
      </Switch>
    );
  }
}

export default App;
