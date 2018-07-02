import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import Audi from '../../assets/images/brands/audi.jpg';
import BMW from '../../assets/images/brands/bmw.jpg';
import Ferrari from '../../assets/images/brands/ferrari.jpg';
import Lamborghini from '../../assets/images/brands/lamborghini.jpg';
import Lexus from '../../assets/images/brands/lexus.jpg';
import Maserati from '../../assets/images/brands/maserati.jpg';
import MercedesBenz from '../../assets/images/brands/mercedes-benz.jpg';
import Porsche from '../../assets/images/brands/porsche.jpg';

// Apps
import Slider from "react-slick";

class HeaderCarrousel extends Component {
    componentDidMount () {
        const script = document.createElement("script");

        script.src = '';
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed:5000,
            infinite: true,
            lazyLoad: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        return (
            <div className="BrandsCarousel">
                <Slider {...settings}>
                    <div>
                        <Link to="/front/inventario?brand=Audi">
                            <img src={ Audi } alt="Audi"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=BMW">
                            <img src={ BMW } alt="BMW"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=Ferrari">
                            <img src={ Ferrari } alt="Ferrari"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=Lamborghini">
                            <img src={ Lamborghini } alt="Lamborghini"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=Lexus">
                            <img src={ Lexus } alt="Lexus"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=Maserati">
                            <img src={ Maserati } alt="Maserati"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=Mercedes-Benz">
                            <img src={ MercedesBenz } alt="Mercedes-Benz"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/front/inventario?brand=Porsche">
                            <img src={ Porsche } alt="Porsche"></img>
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default HeaderCarrousel;