import React, { Component } from "react";
import { Link } from "react-router-dom";


import CarPreview from './CarPreview';


class Inventory extends Component {
    render() {

        function* chunkArray(original, n) {
            const ary = [...original];
            while (ary.length > 0)
                yield ary.splice(ary, n);
        }

        let cars = this.props.cars;
        // eslint-disable-next-line
        let cars_type = this.props.cars_type;

        let carType = <div></div>;

        return (
            <div className="is-latest-inventory">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="title has-text-white is-uppercase">Inventario</h2>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="column is-padding-top-30" id="feeds">
                        {Array.from(chunkArray(cars.splice(0, 6), 3)).map(
                            ([one, two, three,], y) => {
                                return (
                                    <div className="columns" key={y.toString()}>
                                        {one ? <CarPreview car={one}></CarPreview> : <div className="column"></div>}
                                        {two ? <CarPreview car={two}></CarPreview> : <div className="column"></div>}
                                        {three ? <CarPreview car={three}></CarPreview> : <div className="column"></div>}
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="section">
                    <div className="container has-text-centered">
                        <h2 className="title is-uppercase">
                            <Link to="/inventario" className="button has-text-white" id="is-inventory-load-more">cargar mas</Link>
                        </h2>
                    </div>
                </section>
                <section>
                    <div className="columns">
                        {carType}
                    </div>
                </section>
            </div>
        );
    }
}

export default Inventory;