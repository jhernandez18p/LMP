import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class SiteAllCookie extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            'now':'',
            visited: cookies.get('visited') || false,
        };
    }

    handleVisited = () => {
        const { cookies } = this.props;
        const expires = new Date()
        // const expires = moment().add(5, 'days').format('ddd, D MMM YYYY HH:mm:SS UTCz'); // 'Wed, 31 Oct 2012 08:50:17 GMT';
        // expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
        // console.log(expires);
        
        cookies.set(
            'visited', 
            true, 
            { 
                path: '/',
                expires,
                maxAge: 30000,
            }
        );
        this.setState({ 'visited':true });
        // console.log(cookies.get('visited'))
    };
    
    componentDidMount(){
        // console.log(moment().calendar());
        this.setState({ 'now':moment().calendar() });
    }
    render() {
        return(
            <div>
                <div className={ this.state.visited ? "container is-fullhd has-background-grey is-hidden" : "container is-fullhd has-background-grey"} id="cookieBottomBox">
                    <div className="notification has-background-grey">
                        <div className="columns is-centered">
                            <div className="column is-11-desktop is-12-touch">
                                <p className="has-text-white has-text-centered">
                                    Este sitio utiliza <strong>cookies</strong> para ofrecer nuestros servicios, mostrarle anuncios relevantes 
                                    y listados de vehiculos. <strong>Al usar nuestro sitio</strong>, usted reconoce que ha leído y comprende nuestra 
                                    <strong><Link to="/contacto/cookies"> Política de cookies</Link></strong>, <strong><Link to="/contacto/privacidad"> Política de privacidad</Link></strong> y nuestros <strong><Link to="/contacto/terminos-de-servicio"> Términos de servicio</Link></strong>. 
                                    El uso de los productos y servicios de <strong><em><Link to="/">Luxury Motors Panamá</Link></em></strong>, está sujeto a estas <strong>políticas y condiciones</strong>.
                                </p>
                            </div>
                            <div className="column">
                                <p className="button is-text" id="setSiteCookie" onClick={ this.handleVisited } >
                                    <span className="icon is-small">    
                                        <i className="fas fa-times"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withCookies(SiteAllCookie);