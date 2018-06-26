import React, { Component } from 'react';


import Carro from '../../assets/images/carros-12.jpg';

// Apps
import Slider from "react-slick";


class Carrousel extends Component {

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed:5000,
            infinite: true,
            lazyLoad: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    return (
        <section className="section">
            <Slider {...settings}>
                <div>
                    <img src={Carro} alt="Audi" ></img>
                </div>
                <div>
                    <img src={Carro} alt="Audi" ></img>
                </div>
            </Slider>
        </section>
    );
  }
}

export default Carrousel;