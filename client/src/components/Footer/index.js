import React, { Component } from 'react';
// import Helmet from 'react-helmet';
// import { withRouter } from "react-router-dom";

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

import Maps from '../Map/map'
import ContactForm from './form';
import BaseBackground from '../../assets/images/cars/carros-07.jpg';
import ImgForm from '../../assets/images/cars/carros-11.jpg';

const year = new Date().getFullYear();

class Footer extends Component { 
  
  componentDidMount(){
  }
  
  render() {

    const cars = this.props.cars;
    const size = 5;
    const listItems = cars.slice(0,size).map(
      (car) => {
        return (
          <li key={car.id.toString()}>
            <a className="has-text-light" href={`/inventario/${car.model}`}>
              { car.brand } - { car.model } 
            </a>
          </li>)
      }
    );

    return (
      <footer className="my-Footer">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <div className="">
                  <figure className="image is-5by4">
                    <img src={ BaseBackground } alt="Contactenos"></img>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="form-over">
                  <ContactForm/>
                  <figure className="image is-5by4 is-hidden-tablet-only">
                    <img src={ ImgForm } alt="Formulario de contacto"></img>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid has-background-lmpblack">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column">
                  <div className="">
                    <h3 className="is-size-4 has-text-white">
                      Enlaces de interes
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <p className="is-size-6">
                        <a className="has-text-light" href="https://www.audi.es" target="_blank" rel="noopener noreferrer">
                          Audi
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="is-size-6">
                        <a className="has-text-light" href="https://www.bmw.es" target="_blank" rel="noopener noreferrer">
                          BMW
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="is-size-6">
                        <a className="has-text-light" href="https://www.lamborghini.com" target="_blank" rel="noopener noreferrer">
                          Lamborghini
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="is-size-6">
                        <a className="has-text-light" href="https://www.landrover.com" target="_blank" rel="noopener noreferrer">
                          Land Rover
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="is-size-6">
                        <a className="has-text-light" href="https://www.lexus.com" target="_blank" rel="noopener noreferrer">
                          Lexus
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <div className="">
                    <h3 className="is-size-4 has-text-white">
                      Inventario
                    </h3>
                  </div>
                  <ul>{listItems}</ul>
                </div>
                <div className="column">
                  <div className="">
                    <h3 className="is-size-4 has-text-white">
                      Encuentranos
                    </h3>
                  </div>
                  <div>
                    <Maps/>
                  </div>
                </div>
                <div className="column">
                  <div className="">
                    <h3 className="is-size-4 has-text-white">
                      Contacto
                    </h3>
                  </div>
                  <ul className="has-text-light">
                    <li>
                      <p className="is-size-6">Email: <span>luxurymotorspanama@gmail.com</span></p>
                    </li>
                    <li>
                      <p className="is-size-6">Teléfono: <span>229-0628</span></p>
                    </li>
                    <li>
                      <p className="is-size-6">celular: <span>6618-8330</span></p>
                    </li>
                    <li>
                      <p className="is-size-6">Dirección: <span>Calle 68 este, San Francisco</span></p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div id="is-copyright">
            <nav className="navbar is-black">
              <div className="container is-centered">
                <div className="navbar-brand">
                  <p className="navbar-item is-size-7">
                    <a href="https://facebook.com/luxurymotorspanama" target="_blank" rel="noopener noreferrer">
                      <span className="icon has-text-white">
                        <i className="fab fa-facebook-square"></i>
                      </span>
                    </a>
                    <a href="https://instagram.com/luxurymotors.panama" target="_blank" rel="noopener noreferrer">
                      <span className="icon has-text-white">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </p>
                  <p className="navbar-item is-size-7">
                    All Rights Reserved { year } | Website Designed & Developed by &nbsp;
                    <a href="https://dev2tech.xyz"> Dev2tech</a>.
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </footer>
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

export default connect( mapStateToProps )(Footer);