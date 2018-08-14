import React, { Component } from "react";
import Helmet from 'react-helmet';
 
class Error404 extends Component {
  render() {
        return (
            <div>
                <Helmet
                    title="Luxury Motors Panamá - Página no encontrada"
                    meta={[
                        { name: 'description', content: 'App de inicio de sesión, para los usuarios' },
                        { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
                    ]} />
                <div className="container" id="is-error404">
                    <h1>404</h1>
                </div>
            </div>
        );
    }
}

export default Error404;