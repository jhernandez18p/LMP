import React, { Component } from "react";
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { 
  // addUser,
  // apiRequest,
  // authUser,
  // deleteUser,
  // invalidateUser,
  // requestUser,
  // showError,
  // updateUser,
} from '../../redux/actions/userActions';

// Components
import Banner from './details/Banner';
import Carrousel from '../../components/Carrousel';
import Inventory from './details/Inventory';


class Home extends Component {
  render() {
    const cars = this.props.cars;
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
        <Inventory cars={cars}/>
        <Banner/>
      </div>
    );
  }
}

const carsSelector = createSelector(
  state => state.cars,
  cars => cars
);

const siteSelector = createSelector(
  state => state.site,
  site => site
);

const mapStateToProps = createSelector(
  carsSelector,
  siteSelector,
  (cars, site) => ({
    cars, site
  })
);

export default connect( mapStateToProps )(Home);