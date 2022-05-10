import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
// import PropTypes from 'prop-types';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
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

// SolarSystem.propTypes = {
//   data: PropTypes.string,
// };

// SolarSystem.defaultProps = {
//   data: undefined,
// };

export default SolarSystem;
