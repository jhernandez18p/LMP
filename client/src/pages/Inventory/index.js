import React, { Component } from "react";
import Helmet from 'react-helmet';

import Paginator from '../../components/Paginator';
import Searcher from './details/Searcher';
import InventoryFull from './details/Inventory';
 
class Inventory extends Component {
  render() {
    return (
      <div className="container" id="inventory">
        <Helmet
          title="Luxury Motors Panamá - Inventario"
          meta={[
            { name: 'description', content: 'Contamos con un amplio inventario de autos de las mas importantes y renombradas marcas que hay en el mercado, como: Ferrari, Lamgorghini, Lexus, BMW, entre otras.' },
            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
          ]}
        />
        <div className="columns">
          <div className="column">
            <section >
              <Searcher/>
            </section>
          </div>
          <div className="column is-three-quarters">
            <section >
              <InventoryFull/>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Paginator/>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;