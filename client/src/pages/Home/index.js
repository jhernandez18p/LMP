import React, { Component } from "react";
import Helmet from 'react-helmet';

// Components
import Banner from './details/Banner';
import Carrousel from '../../components/Carrousel';
import Inventory from './details/Inventory';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet
          title="Luxury Motors Panamá - Inicio"
          meta={[
            { name: 'description', content: 'Luxury Motors Panamá, sitio web oficial para compra y venta de autos' },
            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
          ]}
        />
        <Carrousel/>
        <Inventory/>
        <Banner/>
      </div>
    );
  }
}

export default Home;