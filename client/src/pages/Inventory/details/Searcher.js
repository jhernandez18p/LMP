import React, { Component } from "react";

class Searcher extends Component {
    render() {
        return (
            <div className="has-background-light" id="is-searcher">
                <div className="field">
                    <label className="label">Buscar</label>
                </div>
                <div className="field">
                    <label className="label">Precio</label>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" placeholder="0.00"></input>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-dollar-sign"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" placeholder="90,000.00"></input>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-dollar-sign"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Año</label>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="year" placeholder="1990"></input>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="year" placeholder="2018"></input>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Marca</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Seleccionar Marca</option>
                                <option>Lexus</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Modelo</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Seleccionar Modelo</option>
                                <option>LX570</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field is-grouped" id="is-search-btn">
                    <div className="control">
                        <button className="button background-red has-text-white">Buscar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Searcher;