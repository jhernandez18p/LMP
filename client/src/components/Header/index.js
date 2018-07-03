import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo/ms-icon-310x310.png';

// Componentes
import HeaderCarrousel from '../Carrousel/Header';
import Nav from '../Nav/index';

class Header extends Component {
  render() {
    return (
      <div id="header" ref="test">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third is-hidden-touch">
              <Link to="/front/inicio">
                <img src={ Logo } alt="Luxury Motors Panamá" id="isHeaderLogo"></img>
              </Link>
            </div>
            <div className="column is-two-thirds">
              <HeaderCarrousel/>
            </div>
            <p>{ this.props.Brands }</p>
          </div>
        </div>
        <Nav/>
      </div>
    );
  }
}

export default Header;