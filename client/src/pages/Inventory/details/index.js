import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

import NavCarousel from '../../../components/Carrousel/NavCarousel';

// Redux
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
// User Actions
import { createSelector } from 'reselect'
import {
    //   addUser,
    //   apiRequest,
    //   authUser,
    //   deleteUser,
    //   invalidateUser,
    //   requestUser,
    //   showError,
    //   updateUser,
} from '../../../redux/actions/userActions';

class InventoryDetail extends Component {

    render() {
        const cars = this.props.cars;
        const current_path = this.props.location.pathname.split('/');
        const path = current_path[current_path.length - 1];

        const is_current = (car) => {
            const current_car = car.model.replace(/\s+/g, '-').toLowerCase() === path;
            return current_car
        }
        const car = cars.filter(is_current)[0];

        const car_imgs = car.photos;

        return (
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="car-detail-carousel">
                                <NavCarousel imgs={car_imgs} />
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="car-detail-box has-background-white-ter has-text-white">
                                <div>
                                    <div className="has-text-left">
                                        <p className="is-size-4 has-text-weight-bold">{car.model} - {car.year}</p>
                                    </div>
                                    <div className="has-text-right" id="price">
                                        <p className="is-size-4 has-text-weight-bold">${car.price}</p>
                                    </div>
                                    <p>
                                    </p>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <h3 className="is-size-5">Marca</h3>
                                        <p className="has-text-grey-light">{car.brand}</p>
                                        <h3 className="is-size-5">Modelo</h3>
                                        <p className="has-text-grey-light">{car.model}</p>
                                        <h3 className="is-size-5">Recorrido</h3>
                                        <p className="has-text-grey-light">{car.milage}</p>
                                        <h3 className="is-size-5">Dirección</h3>
                                        <p className="has-text-grey-light">{car.direction}</p>
                                        <h3 className="is-size-5">Subtipo</h3>
                                        <p className="has-text-grey-light">{car.sub_type}</p>
                                        <h3 className="is-size-5">Tracción</h3>
                                        <p className="has-text-grey-light">{car.traction}</p>
                                        <h3 className="is-size-5">Transmisión</h3>
                                        <p className="has-text-grey-light">Automática</p>
                                    </div>
                                    <div className="column">
                                        <h3 className="is-size-5">Color</h3>
                                        <p className="has-text-grey-light">{car.color}</p>
                                        <h3 className="is-size-5">Combustible</h3>
                                        <p className="has-text-grey-light">{car.fuel}</p>
                                        <h3 className="is-size-5">Sistema de climatización</h3>
                                        <p className="has-text-grey-light">Aire Acondicionado</p>
                                        <h3 className="is-size-5">Motor (cilindraje)</h3>
                                        <p className="has-text-grey-light">{car.engine}</p>
                                        {/* <h3 className="is-size-5">Tipo de motor</h3>
                                        <p className="has-text-grey-light">V8</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}



const carsSelector = createSelector(
    state => state.cars,
    cars => cars
);

const mapStateToProps = createSelector(
    carsSelector,
    (cars) => ({
        cars
    })
);

export default withRouter(connect(mapStateToProps)(InventoryDetail));