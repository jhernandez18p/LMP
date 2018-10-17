import React, { Component } from "react";
import Helmet from 'react-helmet';

// Redux
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
// User Actions
import { createSelector } from 'reselect'
import {
    //   addUser,
    //   apiRequest,
    //   authUser,
    //   deleteUser,
    //   invalidateUser,
    //   requestUser,
    //   showError,
    //   updateUser,
} from '../../redux/actions/userActions';

class Login extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    
    render() {
        return (
            <div>
                <Helmet
                    title="Luxury Motors Panamá - Iniciar sesión"
                    meta={
                        [
                            { name: 'description', content: 'App de inicio de sesión, para los usuarios' },
                            { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
                        ]
                    }/>
                <h2 className="is-size-3">Iniciar sesión</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" name="email"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Escriba aqui su contraseña" name="password" autoComplete="password"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
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

const userSelector = createSelector(
    state => state.user,
    user => user
);

const mapStateToProps = createSelector(
    userSelector,
    (user) => ({
        user
    })
);

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(Login);