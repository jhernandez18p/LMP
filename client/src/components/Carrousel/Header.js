import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
// import Audi from '../../assets/images/brands/audi.jpg';
// import BMW from '../../assets/images/brands/bmw.jpg';
// import Ferrari from '../../assets/images/brands/ferrari.jpg';
// import Lamborghini from '../../assets/images/brands/lamborghini.jpg';
// import Lexus from '../../assets/images/brands/lexus.jpg';
// import Maserati from '../../assets/images/brands/maserati.jpg';
// import MercedesBenz from '../../assets/images/brands/mercedes-benz.jpg';
// import Porsche from '../../assets/images/brands/porsche.jpg';
// import Jeep from '../../assets/images/brands/jeep.jpg';
// import Toyota from '../../assets/images/brands/toyota.jpg';
// import LandRover from '../../assets/images/brands/landrover.jpg';
// import Cadillac from '../../assets/images/brands/cadillac.jpg';

// Apps
import Slider from "react-slick";

class HeaderCarrousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItems: null,
        }
    }
    componentDidMount () {
        // const script = document.createElement("script");

        // script.src = '';
        // script.async = true;

        // document.body.appendChild(script);
        const brands = this.props.brands;
        const size = 15;
        const listItems = brands.slice(0,size).map(
            (brand) => {
                return (
                    <div key={brand.id.toString()}>
                        <Link to={
                            brand.slug 
                            ? `/inventario?brand=${brand.slug.replace(/\s+/g, '-').toLowerCase()}`
                            : `/inventario?brand=${brand.name}`
                        }>
                            <img src={ brand.img } alt={`${ brand.alt }`}></img>
                        </Link>
                    </div>
                )
            }
        );
        // console.log(listItems);
        this.setState({
            listItems: listItems,
        });
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
                    {this.state.listItems}
                    {/* <div>
                        <Link to="/inventario?brand=Audi">
                            <img src={ Audi } alt="Audi"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=BMW">
                            <img src={ BMW } alt="BMW"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Ferrari">
                            <img src={ Ferrari } alt="Ferrari"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Lamborghini">
                            <img src={ Lamborghini } alt="Lamborghini"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Lexus">
                            <img src={ Lexus } alt="Lexus"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Maserati">
                            <img src={ Maserati } alt="Maserati"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Mercedes-Benz">
                            <img src={ MercedesBenz } alt="Mercedes-Benz"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Porsche">
                            <img src={ Porsche } alt="Porsche"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Jeep">
                            <img src={ Jeep } alt="Jeep"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Toyota">
                            <img src={ Toyota } alt="Toyota"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=LandRover">
                            <img src={ LandRover } alt="Land Rover"></img>
                        </Link>
                    </div>
                    <div>
                        <Link to="/inventario?brand=Cadillac">
                            <img src={ Cadillac } alt="Cadillac"></img>
                        </Link>
                    </div> */}
                </Slider>
            </div>
        );
    }
}

export default HeaderCarrousel;