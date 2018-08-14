import React, { Component } from "react";
import Helmet from 'react-helmet';
import { withRouter } from "react-router-dom";

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
} from '../../redux/actions/userActions';

import Paginator from '../../components/Paginator';
import Searcher from './details/Searcher';
import InventoryFull from './details/Inventory';
 
class Inventory extends Component {
  render() {
    const brands = this.props.brands;
    const cars = this.props.cars;
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
              <Searcher brands={ brands } cars={ cars }/>
            </section>
          </div>
          <div className="column is-three-quarters">
            <section >
              <InventoryFull cars={ cars }/>
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


const brandsSelector = createSelector(
  state => state.brands,
  brands => brands
);

const carsSelector = createSelector(
  state => state.cars,
  cars => cars
);

const mapStateToProps = createSelector(
  brandsSelector,
  carsSelector,
  ( brands, cars ) => ({
    brands,
    cars
  })
);

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

export default withRouter(connect( mapStateToProps, mapActionsToProps )(Inventory));