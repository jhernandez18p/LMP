import React, { Component } from "react";

import NavCarousel from '../../../components/Carrousel/NavCarousel';

class InventoryDetail extends Component {
    render() {
        return (
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column">
                            <div className="car-detail-carousel has-background-white-ter is-half">
                                <NavCarousel/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="car-detail-box has-background-white-ter has-text-white">
                                <div>
                                    <div className="has-text-left">
                                        <p className="is-size-4 has-text-weight-bold">Lexus LX570 - 2016</p>
                                    </div>
                                    <div className="has-text-right" id="price">
                                        <p className="is-size-4 has-text-weight-bold">$95,000.00</p>
                                    </div>
                                    <p>
                                    </p>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <h3 className="is-size-5">Marca</h3>
                                        <p className="has-text-grey-light">Lexus</p>
                                        <h3 className="is-size-5">Modelo</h3>
                                        <p className="has-text-grey-light">LX570</p>
                                        <h3 className="is-size-5">Recorrido</h3>
                                        <p className="has-text-grey-light">12.000 Kms.</p>
                                        <h3 className="is-size-5">Dirección</h3>
                                        <p className="has-text-grey-light">Hidráulica</p>
                                        <h3 className="is-size-5">Subtipo</h3>
                                        <p className="has-text-grey-light">Todoterreno</p>
                                        <h3 className="is-size-5">Tracción</h3>
                                        <p className="has-text-grey-light">4 x 4</p>
                                        <h3 className="is-size-5">Transmisión</h3>
                                        <p className="has-text-grey-light">Automática</p>
                                    </div>
                                    <div className="column">
                                        <h3 className="is-size-5">Color</h3>
                                        <p className="has-text-grey-light">Gris</p>
                                        <h3 className="is-size-5">Combustible</h3>
                                        <p className="has-text-grey-light">Gasolina</p>
                                        <h3 className="is-size-5">Vidrios</h3>
                                        <p className="has-text-grey-light">Electricos</p>
                                        <h3 className="is-size-5">Tapizado</h3>
                                        <p className="has-text-grey-light">Cuero</p>
                                        <h3 className="is-size-5">Sistema de climatización</h3>
                                        <p className="has-text-grey-light">Aire Acondicionado</p>
                                        <h3 className="is-size-5">Motor (cilindraje)</h3>
                                        <p className="has-text-grey-light">Motor (cilindraje)</p>
                                        <h3 className="is-size-5">Tipo de motor</h3>
                                        <p className="has-text-grey-light">V8</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default InventoryDetail;