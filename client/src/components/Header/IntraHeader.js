// 
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import LM from '../../assets/images/logo.png';

class IntraHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedMenu: false,
            dropdown: false,
            UserName: this.props.user
        }
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    componentDidMount(){
    }

    onMouseOver(){
        // console.log('Mouse hover');
        this.setState({dropdown: true});
    }
    
    onMouseOut(){
        // console.log('Mouse out');
        this.setState({dropdown: false});
    }

    render() {

        return (
            <div className="intranet-header">
                <nav className={this.state.fixedMenu ? "navbar is-light" : "navbar is-light "}>
                    <div className="container">
                        <div className="navbar-brand">
                            <NavLink activeStyle={{fontWeight: 'bold',color: 'red'}} to="/intra" className="navbar-item">
                                <img src={LM} alt="Luxury Motors Panama" id="isBrandedLogo"></img>
                            </NavLink >
                            <span className={this.state.showMenu ? "navbar-burger" : "navbar-burger active is-active"}
                                onClick={this.toggleMenu} ref="isBurger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navMenu" className={this.state.showMenu ? "navbar-menu" : "navbar-menu"}>
                            <div className="navbar-end">
                                <NavLink exact to="/intra" className="navbar-item" data-target="navMenu" >
                                    Inicio
                                </NavLink >
                                <NavLink exact to="/intra/inventario" className="navbar-item" data-target="navMenu" >
                                    Inventario
                                </NavLink >
                                <div className={
                                        this.state.dropdown 
                                        ? "navbar-item has-dropdown is-active"
                                        : "navbar-item has-dropdown"
                                    } onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                                    <NavLink to="/intra/perfil" className="navbar-link">
                                        { this.state.UserName }
                                    </NavLink>
                                    <div className="navbar-dropdown">
                                        <NavLink to="/intra/perfil" className="navbar-item">
                                            Mi perfil
                                        </NavLink>
                                        <NavLink exact to="/intra/conf" className="navbar-item" data-target="navMenu" >
                                            Configuración
                                        </NavLink >
                                        <NavLink to="auth/log-out" className="navbar-item">
                                            Salir
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default IntraHeader;








