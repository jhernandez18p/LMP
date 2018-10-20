import React, { Component } from 'react';


import Carro1 from '../../assets/images/cars/carros-01.jpg';
import Carro2 from '../../assets/images/cars/carros-02.jpg';
import Carro3 from '../../assets/images/cars/carros-03.jpg';
import Carro4 from '../../assets/images/cars/carros-12.jpg';

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
                    <img src={Carro1} alt="Audi" ></img>
                </div>
                <div>
                    <img src={Carro2} alt="Audi" ></img>
                </div>
                <div>
                    <img src={Carro3} alt="Audi" ></img>
                </div>
                <div>
                    <img src={Carro4} alt="Audi" ></img>
                </div>
            </Slider>
        </section>
    );
  }
}

export default Carrousel;