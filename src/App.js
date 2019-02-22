import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


import logo from './images/logo.png';
import eyecatcher from './images/schoolchildren.jpg'

import './App.css';

library.add(faTools, faHandPointRight)


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
              <img alt="Logo Christliches Kinderhilfswerk Luwero - Uganda e.V." src={logo} ></img>
            </div>
          </div>
        </header>
        <section className="About">
          <div className="Container">
            <div className="Image">
              <FontAwesomeIcon icon="tools" />
            </div>
            <div className="Content">
              <h1>Willkommen auf der Website des Christlichen Kinderhilfswerk Luwero - Uganda e.V.</h1>
              <p>Unsere neue Website befindet sich gerade im Aufbau. Wir bitten Sie um Verständnis!</p>
              <a href="http://www.luwero-community-projects.de" >
                <FontAwesomeIcon icon="hand-point-right" />
                Besuchen Sie unsere bisherigen Website
              </a>
            </div>   
            </div> 
        </section>
        <footer className="Footer">
          <div className="Container">
            <span>Christliches Kinderhilfswerk Luwero - Uganda e.V.</span>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;


