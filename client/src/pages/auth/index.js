import React, { Component } from "react";

import { Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

 
class Auth extends Component {

    componentDidMount() {
    }

    render() {
        if (this.props.location.pathname === "/login") {
            return (
                <div className="container">
                    <div id="is-login">
                        <section className="hero is-fullheight">
                            <div className="hero-body">
                                <div className="container">
                                    <div className="columns">
                                        <div className="column is-three-fifths is-offset-one-fifth">
                                            <div className="has-background-grey-lighter" id="auth">
                                                <Login />
                                                <div className="auth-links">
                                                    <Link to="/registro">Registrarse</Link>
                                                    <Link to="/">Volver al inicio</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div id="is-login">
                        <section className="hero is-fullheight">
                            <div className="hero-body">
                                <div className="container">
                                    <div className="columns">
                                        <div className="column is-three-fifths is-offset-one-fifth">
                                            <div className="has-background-grey-lighter" id="auth">
                                                <Register />
                                                <div className="auth-links">
                                                    <Link to="/login">Imiciar Sesión</Link>
                                                    <Link to="/">Volver al inicio</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        }
    }
}

export default Auth;