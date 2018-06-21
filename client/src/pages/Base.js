// 
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";


// Pages
import About from './About';
import Contact from './Contact';
import FAQ from './Contact/details/FAQ';
import Form2 from './Contact/details/Form2';
import Home from './Home';
import Inventory from './Inventory';


// Components
import Footer from '../components/Footer';
import Header from '../components/Header';


class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="site pageloader">
        <Header/>
        <Switch>
            <Route exact path="/front/inicio" component={ Home } />
            <Route exact path="/front/quienes-somos" component={ About } />
            <Route exact path="/front/inventario" component={ Inventory } />
            <Route exact path="/front/contacto" component={ Contact } />
            <Route exact path="/front/contacto/f-a-q" component={ FAQ } />
            <Route exact path="/front/contacto/#agendar-visita" component={ Form2 } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Base;