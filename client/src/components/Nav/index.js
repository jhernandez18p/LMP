import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import LM from '../../assets/images/lm.png';

class Nav extends Component {

    toggeable(){

    }
    render() {
        return (
            <nav className={ this.props.fixedMenu ? "navbar is-black is-colored-nav" : "navbar is-black is-colored-nav is-fixed-top" }>
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/front/inicio" className="navbar-item">
                            <img src={ LM } alt="Luxury Motors Panama" id="isBrandedLogo"></img>
                        </Link>
                        <span className={ this.props.showMenu ? "navbar-burger" : "navbar-burger is-active" }
                        onClick={this.props.toggleMenu} ref="isBurger" data-target="navMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navMenu" className={ this.props.showMenu ? "navbar-menu" : "navbar-menu is-active" }>
                        <div className="navbar-end">
                            <Link onClick={ this.toggeable } data-target="navMenu" to="/front/inicio" className="navbar-item">Inicio</Link>
                            <Link onClick={ this.toggeable } data-target="navMenu" to="/front/quienes-somos" className="navbar-item">¿Quienes somos?</Link>
                            <Link onClick={ this.toggeable } data-target="navMenu" to="/front/inventario" className="navbar-item">Inventario</Link>
                            <Link onClick={ this.toggeable } data-target="navMenu" to="/front/contacto" className="navbar-item">Contacto</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;