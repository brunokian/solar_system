import React from 'react';
import './App.css';
import Planets from './data/planets';

import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';

// import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        {
          Planets.map((obj) => (<PlanetCard
            key={ obj.name }
            planetName={ obj.name }
            planetImage={ obj.image }
          />))
        }
      </div>
    );
  }
}

export default App;
