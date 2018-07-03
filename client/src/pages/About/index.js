import React, { Component } from "react";
import Helmet from 'react-helmet';

import BaseBackground from '../../assets/images/about.jpg';
import Carrousel from '../../components/Carrousel';

class About extends Component {
  render() {
    return (
      <div className="container">
        <Helmet
          title="Luxury Motors Panamá - ¿Quienes somos?"
          meta={[
            { name: 'description', content: 'Con mas de 20 años en el mercado de autos de lujos, somos pioneros en la ciudad de Panamá y contamos con amplia experiencia en el area.' },
            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
          ]}
        />
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title has-text-white is-uppercase">Nuestra historia</h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column">
              <div className="">
                <figure className="image is-5by4">
                  <img src={BaseBackground} alt="Contactenos"></img>
                </figure>
              </div>
            </div>
            <div className="column">
              <div className="car-detail-box has-background-white-ter has-text-white">
                <div>
                  <div className="has-text-centered">
                    <p className="is-size-4 has-text-weight-bold">Luxury Motors Panamá</p>
                  </div>
                  <p>
                  </p>
                </div>
                <div className="columns">
                  <div className="column">
                    <h3 className="is-size-5">Nuestra historia</h3>
                    <p className="has-text-grey-light">Con mas de 20 años en el mercado de autos de lujos, somos pioneros en la ciudad de Panamá y contamos con amplia experiencia en el area.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h2 className="title has-text-white is-uppercase">Galeria</h2>
            </div>
          </div>
        </section>
        <section>
          <Carrousel/>
        </section>
      </div>
    );
  }
}

export default About;