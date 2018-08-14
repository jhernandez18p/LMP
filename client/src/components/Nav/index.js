import React, { Component } from 'react';
import { NavLink   } from "react-router-dom";

// Assets
// import LM from '../../assets/images/lm.png';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fixedMenu: true,
            showMenu: true,
            toggled: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleWindowScroll = this.handleWindowScroll.bind(this);
    }

    toggleMenu = function () {

        if (this.state.toggled) {
            this.setState({
                showMenu: this.state.showMenu,
                toggled: !this.state.toggled
            });
        } else {
            this.setState({
                showMenu: !this.state.showMenu,
                toggled: this.state.toggled
            });
            // console.log('Toggled = True');
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', this.handleWindowScroll);
    }
    
    componentWillUnmount() {}
    
    handleWindowScroll(){
        // let element = document.getElementsByClassName('site');
        // console.log(element);
    };

    render() {
        return (
            <nav className={ this.state.fixedMenu ? "navbar is-black is-colored-nav" : "navbar is-black is-colored-nav is-fixed-top" }>
                <div className="container">
                    <div className="navbar-brand">
                        {/* <NavLink activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}  to="/" className="navbar-item">
                            <img src={ LM } alt="Luxury Motors Panama" id="isBrandedLogo"></img>
                        </NavLink > */}
                        <span className={ this.state.showMenu ? "navbar-burger" : "navbar-burger active is-active" }
                        onClick={this.toggleMenu} ref="isBurger" data-target="navMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navMenu" className={ this.state.showMenu ? "navbar-menu" : "navbar-menu is-active" }>
                        <div className="navbar-end">
                            <NavLink activeClassName="is-navbar-active-home" exact to="/" className="navbar-item" data-target="navMenu" >
                                Inicio
                            </NavLink >
                            <NavLink activeClassName="is-navbar-active-home" to="/quienes-somos" className="navbar-item" data-target="navMenu" >
                                ¿Quienes somos?
                            </NavLink >
                            <NavLink activeClassName="is-navbar-active-home" to="/inventario" className="navbar-item" data-target="navMenu" >
                                Inventario
                            </NavLink >
                            <NavLink activeClassName="is-navbar-active-home" to="/contacto" className="navbar-item" data-target="navMenu" >
                                Contacto
                            </NavLink >
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;