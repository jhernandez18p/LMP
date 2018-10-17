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
 
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: false, name: false,
            submit: false, pass1: '',
            pass2: '', can_submit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkPassword1 = this.checkPassword1.bind(this);
        this.checkPassword2 = this.checkPassword2.bind(this);
    }

    checkPassword(){
        if(this.state.pass1 === this.state.pass2){
            console.log(this.state.pass1, this.state.pass2);
            this.setState({can_submit:true});
            return true
        }
        return false
    }

    checkPassword1(e){
        e.preventDefault();
        const pass1 = (e.target.value);
        this.setState({
            pass1: pass1
        });
        this.checkPassword();
    }
    
    checkPassword2(e){
        e.preventDefault();
        const pass2 = (e.target.value);
        this.setState({
            pass2: pass2
        });
        this.checkPassword();
    }

    handleSubmit(e){
        e.preventDefault();
        const email = e.target.email.value;
        const pass1 = e.target.pass1.value;
        const pass2 = e.target.pass2.value;
        console.log( email, pass1, pass2 );
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Luxury Motors Panamá - Registro de usuario"
                    meta={[
                        { name: 'description', content: 'App de registro, para los usuarios nuevos' },
                        { name: 'keywords', content: 'Lujo, autos, carros en panama, compra venta, Panamá' },
                    ]} />
                <h2 className="is-size-3">Registro de usuarios</h2>
                <form onSubmit={ this.handleSubmit } >
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                name="email" className="input" 
                                type="email" placeholder="Email" 
                                required
                                />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            {
                                this.state.email
                                ?<span className="icon is-small is-right has-text-success"><i className="fas fa-check is-success"></i></span>
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
                                onChange={ this.checkPassword1 }
                                autoComplete="password"/>
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
                                onChange={ this.checkPassword2 }
                                autoComplete="password"/>
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
                            {/* {  */}
                                {/* this.state.can_submit */}
                                <button className="button is-success g-recaptcha" >Registrarse</button>
                            {/* } */}
                        </p>
                    </div>
                </form>
            </div>
        )
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

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Register);