import React, { Component } from "react";
import { Link } from "react-router-dom";

import BaseBackground from '../../../assets/images/cars/carros-05.jpg';


class Inventory extends Component {
    render() {
        return (
            <div className="is-latest-inventory">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="title has-text-white is-uppercase">Nuevos Autos</h2>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="columns">
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to="/front/inventario/lexus-lx570" >
                                <div className="has-background-light is-radius is-inventory">
                                    <figure className="image is-5by3">
                                        <img src={ BaseBackground } alt="Ferrari"></img>
                                    </figure>
                                    <div className="">
                                        <h3 className="is-size-4">Lexus LX570</h3>
                                        <p className="">Hermosa camioneta Lexus modelo LX570, con apenas 12.000 Kms, todoterreno, automatica, 4x4 ...</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title is-uppercase">
                            <Link to="/front/inventario" className="button has-text-white" id="is-inventory-load-more">cargar mas</Link>
                        </h2>
                    </div>
                </section>
            </div>
        );
    }
}

export default Inventory;