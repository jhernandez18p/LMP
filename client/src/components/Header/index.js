import React, { Component } from 'react';


// Assets
import Logo from '../../assets/images/logo.png';


// Componentes
import HeaderCarrousel from '../Carrousel/Header';
import Nav from '../Nav/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: true,
      toggled: false,
      fixedMenu: true
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = function () {
    if (this.state.toggled){
      this.setState({ 
        showMenu: this.state.showMenu,
        toggled: !this.state.toggled
      });
    }else{
      this.setState({ 
        showMenu: !this.state.showMenu,
        toggled: this.state.toggled
      });
      console.log('Toggled = True');
    }
  }

  render() {
    return (
      <div id="header" ref="test">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <img src={ Logo } alt="Luxury Motors Panamá"></img>
            </div>
            <div className="column is-two-thirds">
              <HeaderCarrousel/>
            </div>
            <p>{ this.props.Brands }</p>
          </div>
        </div>
        <Nav 
          toggleMenu={this.toggleMenu} 
          showMenu={this.state.showMenu} 
          fixedMenu={this.state.fixedMenu}/>
      </div>
    );
  }
}

export default Header;