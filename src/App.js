import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './images/logo.png';
import eyecatcher from './images/schoolchildren.jpg'

import './App.css';

var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="HeroImage" style={eyecatcherBackground}>
          <div className="Container">
            <div className="LogoImage" >
              <img src={logo} ></img>
            </div>
          </div>
        </header>
        <section className="About">
          <div className="Container">
            <h1>Willkommen auf der Website des Christlichen Kinderhilfswerk Luwero - Uganda</h1>
            <p>Unsere neue Website befindet sich gerade im Aufbau. Wir bitten Sie um Verständnis!</p>
            <a href="http://www.luwero-community-projects.de" >Informationen auf unserer bisherigen Website</a>
          </div>    
        </section>

      </div>
    );
  }
}

export default App;


