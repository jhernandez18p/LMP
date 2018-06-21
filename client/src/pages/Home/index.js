import React, { Component } from "react";

// Assets
import './styles.css';

// Components
import Banner from './details/Banner';
// import Carrousel from '../../components/Carrousel';
import Categories from '../../components/Products/Categories';
import Post from '../../components/Blog';
import Services from '../../components/Services';
import Carrousel from "../../components/Carrousel";


class Home extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "";
    script.async = true;

    document.body.appendChild(script);
    
  }
    render() {
    return (
      <div>
        <div className="container" id="carousel">
          <Carrousel/>
          <Banner/>
          <Services/>
          <Categories/>
          <Post/>
          {/* <div>
            { this.state.users }
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;