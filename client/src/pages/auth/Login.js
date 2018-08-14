import React, { Component } from "react";
import Helmet from 'react-helmet';

class Login extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Luxury Motors Panamá - Iniciar sesión"
                    meta={[
                        { name: 'description', content: 'App de inicio de sesión, para los usuarios' },
                        { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
                    ]} />
                <h2 className="is-size-3">Iniciar sesión</h2>
                <form onSubmit={()=>{alert('Submit');}}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" />
                            {/* <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span> */}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Escriba aqui su contraseña" />
                            {/* <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span> */}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success g-recaptcha" data-sitekey="6LcrXWkUAAAAAFMG3gmAaDONlTVYllTfhm-ehrb5" data-callback="6LcrXWkUAAAAAFMG3gmAaDONlTVYllTfhm-ehrb5">
                                Iniciar sesión
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;