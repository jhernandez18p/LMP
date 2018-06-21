import React, { Component } from "react";

import BaseBackground from '../../../assets/images/carros-04.jpg';

class Banner extends Component {
    render() {
        return (
            <section className="section">
                <figure className="image is-3by1">
                    <img src={ BaseBackground } alt="Banner"></img>
                </figure>
            </section>
        );
    }
}

export default Banner;