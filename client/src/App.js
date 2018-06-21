// 
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";


// Assets
import './index.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bulma-carousel/dist/js/bulma-carousel';

// Components 
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
