import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import MAP from '../../assets/images/map.jpg';

export class Maps extends Component {
  

  render() {
    return (
      <div id="map">
        <picture>
          <a className="has-text-light" href="https://www.google.com.pa/maps/place/Luxury+Motors+Panama/@8.987793,-79.5100239,19.5z/data=!4m5!3m4!1s0x0:0x167b3f19532d83!8m2!3d8.9879867!4d-79.5096606?hl=es&authuser=0" target="_blank" rel="noopener noreferrer">
            <img src={ MAP } alt="Mapa"/>
          </a>
        </picture>
      </div>
    );
  }
}

export default Maps;



