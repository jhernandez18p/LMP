import React, { Component } from 'react';
import { Link } from "react-router-dom";

import BaseBackground from '../../../assets/images/cars/carros-05.jpg';

class CarPreview extends Component {
    render() {
        let car = this.props.car;
        return (
            <div className="column" key={car.id.toString()}>
                <Link to={car.model ? `/inventario/${car.model.replace(/\s+/g, '-').toLowerCase()}` : "/inventario/"}>
                    <div className="img-container is-radius is-inventory">
                        <figure className="image is-5by3">
                            <img src={car.photos[0].position === 0 ? `${car.photos[0].low}` : BaseBackground} alt={car.brand}></img>
                        </figure>
                        <div className="img-text-overlay">
                            <div className="text">
                                <h3 className="is-size-4">{car.brand} {car.model}</h3>
                                <p className="">{car.description}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default CarPreview;