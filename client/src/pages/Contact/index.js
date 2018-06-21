import React, { Component } from "react";
import { Link } from "react-router-dom";

import BaseBackground from '../../assets/images/background.jpg';
 
class Contact extends Component {
  render() {
    return (
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <div className="">
                <Link to="/contacto/f-a-q">
                  <figure className="image is-5by4">
                    <img src={ BaseBackground } alt="Contactenos"></img>
                  </figure>
                </Link>
              </div>
            </div>
            <div className="column">
              <figure className="image is-5by4">
                <Link to="/contacto/agendar-visita">
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