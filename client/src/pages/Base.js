import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

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
// import Error404 from './Error/404';

// Components
import SiteAllCookie from '../components/Cookies';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Redux
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
// User Actions
import { createSelector } from 'reselect'
import { 
  // addUser,
  apiRequest,
  // authUser,
  // deleteUser,
  // invalidateUser,
  // requestUser,
  // showError,
  updateUser,
} from '../redux/actions/userActions';

class Base extends Component {

  render() {
    let cars = this.props.cars;
    let cars_type = this.props.cars_type;
    return (
      <div className="site has-navbar-fixed-top">
        <SiteAllCookie/>
        <Header brands={ this.props.brands }/>
        <Switch>
            <Route exact path="/quienes-somos" component={ About } />
            <Route exact path="/inventario/:slug" component={ InventoryDetail } cars={ cars } cars_type={cars_type}/>
            <Route exact path="/inventario" component={ Inventory } />
            <Route exact path="/contacto/terminos-de-servicio" component={ ServiceTermns } />
            <Route exact path="/contacto/privacidad" component={ PrivacyTermns } />
            <Route exact path="/contacto/f-a-q" component={ FAQ } />
            <Route exact path="/contacto/cookies" component={ Cookie } />
            <Route exact path="/contacto/#agendar-visita" component={ Form2 } />
            <Route exact path="/contacto" component={ Contact } />
            <Route exact path="/" component={ Home } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}


const siteSelector = createSelector(
  state => state.site,
  site => site
);

const brandsSelector = createSelector(
  state => state.brands,
  brands => brands
);

const carsSelector = createSelector(
  state => state.cars,
  cars => cars
);

const carsTypeSelector = createSelector(
  state => state.cars_type,
  cars_type => cars_type
);

const userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = createSelector(
  brandsSelector,
  carsSelector,
  carsTypeSelector,
  userSelector,
  siteSelector,
  ( brands, cars, cars_type, user, site ) => ({
    brands,
    cars,
    cars_type,
    site,
    user
  })
);

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

export default withRouter(connect( mapStateToProps, mapActionsToProps )(Base));