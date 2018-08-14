import React, { Component } from "react";
import Helmet from 'react-helmet';
 
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: false,
            name: false,
            submit: false,
            pass: false
        }
    }
    handleSubmit(event){
    }
    render() {
        return (
            <div>
                <Helmet
                    title="Luxury Motors Panamá - Registro de usuario"
                    meta={[
                        { name: 'description', content: 'App de registro, para los usuarios nuevos' },
                        { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
                    ]}
                    script={[
                        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js' },
                        // { 'src': 'https://www.google.com/recaptcha/api.js' },
                    ]} />
                <h2 className="is-size-3">Registro de usuarios</h2>
                <form onSubmit={ () => { alert('Submit'); }} >
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                name="email"
                                className="input" 
                                type="email" 
                                placeholder="Email" 
                                required
                                onChange={this.handleSubmit}
                                />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            {this.state.email
                                ?<span className="icon is-small is-right has-text-success">
                                    <i className="fas fa-check"></i>
                                </span>
                                :<span/>
                            }
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                name="name"
                                className="input" 
                                type="text" 
                                placeholder="¿Cómo te llamas?" 
                                required
                                onChange={this.handleSubmit}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            {this.state.name
                                ?<span className="icon is-small is-right has-text-success">
                                    <i className="fas fa-check"></i>
                                </span>
                                :<span/>
                            }
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input 
                                name="pass1"
                                className="input" 
                                type="password" 
                                placeholder="Escriba aqui su contraseña"
                                required
                                onChange={this.handleSubmit}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                            {this.state.pass
                                ?<span className="icon is-small is-right has-text-success">
                                    <i className="fas fa-check"></i>
                                </span>
                                :<span/>
                            }
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input
                                name="pass2"
                                className="input" 
                                type="password" 
                                placeholder="Confirmar contraserña" 
                                required
                                onChange={this.handleSubmit}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                            {this.state.pass
                                ?<span className="icon is-small is-right has-text-success">
                                    <i className="fas fa-check"></i>
                                </span>
                                :<span/>
                            }
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success g-recaptcha" disabled>
                                Registrarse
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;