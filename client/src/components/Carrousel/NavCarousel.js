import React, { Component } from 'react';

// import Carro2 from '../../assets/images/cars/carros-12.jpg';
// import Carro3 from '../../assets/images/cars/carros-11.jpg';
// import Carro4 from '../../assets/images/cars/carros-10.jpg';
// import Carro1 from '../../assets/images/cars/carros-09.jpg';

// Apps
import Slider from "react-slick";

const settings_1 = {
    autoplay: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
    slidesToScroll: 1
};
const settings = {
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    lazyLoad: true,
    centerPadding: '50px',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

class NavCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: null,
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        const imgs = this.props.imgs;
        // console.log(imgs);
        const size = 5;
        const listItems = imgs.slice(0, size).map(
            (img) => {
                return (
                    <div key={img.position.toString()}>
                        <img src={img.low} alt={img.alt}></img>
                    </div>
                )
            }
        );
        this.setState({
            listItems: listItems,
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div className="">
                <Slider {...settings_1}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    {this.state.listItems}
                    {/* <div>
                        <img src={ Carro2 } alt=""></img>
                    </div>
                    
                    <div>
                        <img src={ Carro4 } alt=""></img>
                    </div>
                    <div>
                        <img src={ Carro1 } alt=""></img>
                    </div> */}
                </Slider>
                <Slider {...settings}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {this.state.listItems}
                    {/* <div>
                        <img src={ Carro2 } alt="Carro2"></img>
                    </div>
                    <div>
                        <img src={ Carro3 } alt="Carro3"></img>
                    </div>
                    <div>
                        <img src={ Carro4 } alt="Carro4"></img>
                    </div>
                    <div>
                        <img src={ Carro1 } alt="Carro1"></img>
                    </div> */}
                </Slider>
            </div>
        );
    }
}

export default NavCarousel;
