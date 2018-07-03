import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import LM from '../../assets/images/lm.png';

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
            console.log('Toggled = True');
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', this.handleWindowScroll);
    }
    
    componentWillUnmount() {}
    
    handleWindowScroll(){
        let element = document.getElementsByClassName('site');
        console.log(element);
        // element.addEventListener('scroll', function (){
            // console.log('scrolled');
            
        // });
                
    };

    render() {
        return (
            <nav className={ this.state.fixedMenu ? "navbar is-black is-colored-nav" : "navbar is-black is-colored-nav is-fixed-top" }>
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/front/inicio" className="navbar-item">
                            <img src={ LM } alt="Luxury Motors Panama" id="isBrandedLogo"></img>
                        </Link>
                        <span className={ this.state.showMenu ? "navbar-burger" : "navbar-burger active is-active" }
                        onClick={this.toggleMenu} ref="isBurger" data-target="navMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navMenu" className={ this.state.showMenu ? "navbar-menu" : "navbar-menu is-active" }>
                        <div className="navbar-end">
                            <Link to="/front/inicio" className="navbar-item" data-target="navMenu" >
                                Inicio
                            </Link>
                            <Link to="/front/quienes-somos" className="navbar-item" data-target="navMenu" >
                                ¿Quienes somos?
                            </Link>
                            <Link to="/front/inventario" className="navbar-item" data-target="navMenu" >
                                Inventario
                            </Link>
                            <Link to="/front/contacto" className="navbar-item" data-target="navMenu" >
                                Contacto
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;