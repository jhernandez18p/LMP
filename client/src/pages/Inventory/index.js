import React, { Component } from "react";

import Paginator from '../../components/Paginator';
import Searcher from './details/Searcher';
import InventoryFull from './details/Inventory';
 
class Inventory extends Component {
  render() {
    return (
      <div className="container" id="inventory">
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