import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Assets
import './index.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bulma-carousel/dist/js/bulma-carousel';

// Pages
import Auth from './pages/Auth';
import BaseLayout from './pages/BaseLayout';
import PanelLayout from './pages/Panel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Switch>
        <Route path="/auth" component={ Auth } />
        <Route path="/intra" component={ PanelLayout } />
        <Route path="/" component={ BaseLayout } />
      </Switch>
    );
  }
}

export default App;
