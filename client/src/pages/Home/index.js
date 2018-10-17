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
    let cars = this.props.cars;
    let cars_type = this.props.cars_type;
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
        <Inventory cars={cars} cars_type={cars_type}/>
        <Banner/>
      </div>
    );
  }
}

const carsSelector = createSelector(
  state => state.cars,
  cars => cars
);

const carsTypeSelector = createSelector(
  state => state.cars_type,
  cars_type => cars_type
);

const siteSelector = createSelector(
  state => state.site,
  site => site
);

const mapStateToProps = createSelector(
  carsSelector,
  carsTypeSelector,
  siteSelector,
  (cars, cars_type, site) => ({
    cars, cars_type, site
  })
);

export default connect( mapStateToProps )(Home);