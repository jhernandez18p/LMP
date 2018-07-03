import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

// Pages
import About from './About';
import Contact from './Contact';
import FAQ from './Contact/details/FAQ';
import Form2 from './Contact/details/Form2';
import Cookie from './Contact/details/Cookies';
import PrivacyTermns from './Contact/details/PrivacyTermns';
import ServiceTermns from './Contact/details/ServiceTermns';
import Home from './Home';
import Inventory from './Inventory';
import InventoryDetail from './Inventory/details';

// Components
import SiteAllCookie from '../components/Cookies';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Assets
import appleicon114x114 from '../assets/images/logo/apple-icon-114x114.png';
import appleicon120x120 from '../assets/images/logo/apple-icon-120x120.png';
import appleicon144x144 from '../assets/images/logo/apple-icon-144x144.png';
import appleicon152x152 from '../assets/images/logo/apple-icon-152x152.png';
import appleicon180x180 from '../assets/images/logo/apple-icon-180x180.png';
import appleicon57x57 from '../assets/images/logo/apple-icon-57x57.png';
import appleicon60x60 from '../assets/images/logo/apple-icon-60x60.png';
import appleicon72x72 from '../assets/images/logo/apple-icon-72x72.png';
import appleicon76x76 from '../assets/images/logo/apple-icon-76x76.png';
import favicon16x16 from '../assets/images/logo/favicon-16x16.png';
import androidicon192x192 from '../assets/images/logo/android-icon-192x192.png';
import favicon32x32 from '../assets/images/logo/favicon-32x32.png';
import favicon96x96 from '../assets/images/logo/favicon-96x96.png';


class Base extends Component {

  render() {
    return (
      <div className="site has-navbar-fixed-top">
        <Helmet
          title="Luxury Motors - Panamá"
          meta={[
            { name: 'description', content: 'Luxury Motors Panamá, sitio web oficial para compra y venta de autos' },
            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
          ]}
          script={[
            { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
          ]}
          link={
            [
              { 'rel': "apple-touch-icon", 'sizes': "114x114", 'href': appleicon114x114 },
              { 'rel': "apple-touch-icon", 'sizes': "120x120", 'href': appleicon120x120 },
              { 'rel': "apple-touch-icon", 'sizes': "144x144", 'href': appleicon144x144 },
              { 'rel': "apple-touch-icon", 'sizes': "152x152", 'href': appleicon152x152 },
              { 'rel': "apple-touch-icon", 'sizes': "180x180", 'href': appleicon180x180 },
              { 'rel': "apple-touch-icon", 'sizes': "57x57", 'href': appleicon57x57 },
              { 'rel': "apple-touch-icon", 'sizes': "60x60", 'href': appleicon60x60 },
              { 'rel': "apple-touch-icon", 'sizes': "72x72", 'href': appleicon72x72 },
              { 'rel': "apple-touch-icon", 'sizes': "76x76", 'href': appleicon76x76 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "16x16", 'href': favicon16x16 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "192x192", 'href': androidicon192x192 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "32x32", 'href': favicon32x32 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "96x96", 'href': favicon96x96 },
              { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Titillium+Web&amp;subset=latin-ext' },
            ]
          }
        />
        <SiteAllCookie/>
        <Header/>
        <Switch>
            <Route exact path="/front/inicio" component={ Home } />
            <Route exact path="/front/quienes-somos" component={ About } />
            <Route exact path="/front/inventario" component={ Inventory } />
            <Route exact path="/front/inventario/:slug" component={ InventoryDetail } />
            <Route exact path="/front/contacto" component={ Contact } />
            <Route exact path="/front/contacto/#agendar-visita" component={ Form2 } />
            <Route exact path="/front/contacto/cookies" component={ Cookie } />
            <Route exact path="/front/contacto/f-a-q" component={ FAQ } />
            <Route exact path="/front/contacto/privacidad" component={ PrivacyTermns } />
            <Route exact path="/front/contacto/terminos-de-servicio" component={ ServiceTermns } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Base;