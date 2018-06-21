import React, { Component } from 'react';


import Carro from '../../assets/images/carros-12.jpg';

class Carrousel extends Component {

    render() {
    return (
        <section className="section">
            <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true" data-delay="5000">
                <div className='carousel-container'>
                    <div className='carousel-item is-active'>
                        <figure className="image is-2by1">
                            <img src={ Carro } alt="Img"></img>
                        </figure>
                    </div>
                    <div className='carousel-item is-active'>
                        <figure className="image is-2by1">
                            <img src={ Carro } alt="Img"></img>
                        </figure>
                    </div>
                </div>
                <div className="carousel-navigation is-overlay">
                    <div className="carousel-nav-left">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </div>
                    <div className="carousel-nav-right">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Carrousel;