import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Assets
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Mantenimiento from './components/Mantenimiento';

// Pages
import Base from './pages/Base';
import Auth from './pages/auth';


class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={ Auth } />
          <Route path="/registro" component={ Auth } />
          
          <Route path="/" component={ Base } />
          <Route path="" component={ Mantenimiento } />
        </Switch>
      </div>
    );
  }
};

export default App;