import React, { Component } from "react";

import BaseBackground from '../../../assets/images/background.jpg';

class Banner extends Component {
    render() {
        return (
            <div className="columns is-mobile is-centered" id="about">
                <div className="column">
                    <img src={ BaseBackground } alt="Banner" id="aboutBanner"></img>
                </div>
                <div className="column ">
                    <div className="card">
                        <div className="card-content">
                            <p className="title">
                                Moby Supply
                            </p>
                            <p className="subtitle">
                                Moby Panamá, S.A. fue fundada en Panamá en el año 2011 estructurada en forma sociedad anónima. Actualmente, con más de 30 colaboradores, hacemos presencia en Panamá.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;