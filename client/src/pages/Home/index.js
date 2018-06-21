import React, { Component } from "react";


// Components
import Banner from './details/Banner';
import Carrousel from '../../components/Carrousel';
import Inventory from './details/Inventory';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <Carrousel/>
        <Inventory/>
        <Banner/>
      </div>
    );
  }
}

export default Home;