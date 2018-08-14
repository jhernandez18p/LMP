// 
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo.png';

// Componentes
import HeaderCarrousel from '../Carrousel/Header';
import Nav from '../Nav/index';

class Header extends Component {
  render() {
    const brands = this.props.brands;
    
    return (
      <div id="header" ref="test">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third is-hidden-touch">
              <NavLink exact to="/">
                <img src={ Logo } alt="Luxury Motors Panamá" id="isHeaderLogo"></img>
              </NavLink>
            </div>
            <div className="column is-two-thirds">
              <HeaderCarrousel brands={ brands }/>
            </div>
          </div>
        </div>
        <Nav/>
      </div>
    );
  }
}

export default Header;