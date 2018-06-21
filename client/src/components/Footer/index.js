import React, { Component } from 'react';

import BaseBackground from '../../assets/images/carros-07.jpg';
import ImgForm from '../../assets/images/carros-11.jpg';

class Footer extends Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="">
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <div className="">
                  <figure className="image is-5by4">
                    <img src={ BaseBackground } alt="Contactenos"></img>
                  </figure>
                  {/* <h2 className="has-text-light has-text-centered is-uppercase is-size-1" id="is-img-centered">Contáctenos</h2> */}
                </div>
              </div>
              <div className="column">
                <figure className="image is-5by4">
                  <img src={ ImgForm } alt="Formulario de contacto"></img>
                </figure>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns">
              <div className="column">
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </div>
              <div className="column">
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </div>
              <div className="column">
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </div>
            </div>
          </section>
        </div>
        <div id="is-copyright">
          <nav className="navbar is-black">
            <div className="container is-centered">
              <div className="navbar-brand">
                <p className="navbar-item is-size-7">
                  All Rights Reserved {year} | Website Designed & Developed by &nbsp;
                  <a href="https://dev2tech.xyz"> Dev2tech</a>.
                </p>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;