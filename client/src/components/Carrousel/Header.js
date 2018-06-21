import React, { Component } from 'react';
import './header-styles.css'; 

import Audi from '../../assets/images/brands/audi.jpg';
import BMW from '../../assets/images/brands/bmw.jpg';
import Ferrari from '../../assets/images/brands/ferrari.jpg';
import Lamborghini from '../../assets/images/brands/lamborghini.jpg';
import Lexus from '../../assets/images/brands/lexus.jpg';
import Maserati from '../../assets/images/brands/maserati.jpg';
import MercedesBenz from '../../assets/images/brands/mercedes-benz.jpg';
import Porsche from '../../assets/images/brands/porsche.jpg';

class HeaderCarrousel extends Component {

    render() {
    
        return (
            <div className="BrandsCarousel">
                <div className='carousel carousel-animated carousel-animate-slide' data-size="3" data-autoplay="true" data-delay="5000">
                    <div className='carousel-container'>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ Audi } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ BMW } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ Ferrari } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ Lamborghini } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ Lexus } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ Maserati } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ MercedesBenz } alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src={ Porsche } alt="Img"></img>
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
            </div>
        );
    }
}

export default HeaderCarrousel;