import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';


// Pages
import About from './About';
import Contact from './Contact';
import FAQ from './Contact/details/FAQ';
import Form2 from './Contact/details/Form2';
import Home from './Home';
import Inventory from './Inventory';
import InventoryDetail from './Inventory/details';


// Components
import Footer from '../components/Footer';
import Header from '../components/Header';


class Base extends Component {

  render() {
    return (
      <div className="site pageloader">
        <Helmet
          title="Luxury Motors Panamá"
          meta={[
            { name: 'description', content: 'Luxury Motors Panamá, sitio web oficial para compra y venta de autos' },
            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
          ]}
          script={[
            { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
          ]}
          link={[
            {'rel':'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Titillium+Web&amp;subset=latin-ext'}
          ]}
        />
        <Header/>
        <Switch>
            <Route exact path="/front/inicio" component={ Home } />
            <Route exact path="/front/quienes-somos" component={ About } />
            <Route exact path="/front/inventario" component={ Inventory } />
            <Route exact path="/front/inventario/:slug" component={ InventoryDetail } />
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