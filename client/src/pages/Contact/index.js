import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

import BaseBackground from '../../assets/images/background.jpg';
 
class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Helmet
          title="Luxury Motors Panamá - Contacto"
          meta={[
            { name: 'description', content: 'Contactenos a nuestros numeros de teléfono +507 390-0000' },
            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
          ]}
        />
        <section className="section">
          <div className="columns">
            <div className="column">
              <div className="">
                <Link to="/front/contacto/f-a-q">
                  <figure className="image is-5by4">
                    <img src={ BaseBackground } alt="Contactenos"></img>
                  </figure>
                </Link>
              </div>
            </div>
            <div className="column">
              <figure className="image is-5by4">
                <Link to="/front/contacto/agendar-visita">
                  <img src={ BaseBackground } alt="Formulario de contacto"></img>
                </Link>
              </figure>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;