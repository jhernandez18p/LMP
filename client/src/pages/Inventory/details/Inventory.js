import React, { Component } from "react";

import CarPreview  from '../../Home/details/CarPreview'

class InventoryFull extends Component {

    render() {
        function* chunkArray(original, n) {
            const ary = [...original];
            while (ary.length > 0)
                yield ary.splice(ary, n);
        }

        let cars = this.props.cars;
        
        return (
            <div className="" id="is-searcher">
                <section className="">
                <div className="column is-padding-top-30" id="feeds">
                        {Array.from(chunkArray(cars, 3)).map(
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
            </div>
        );
    }
}

export default InventoryFull;