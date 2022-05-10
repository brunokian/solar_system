import React from 'react';
import Title from './Title';
// import PropTypes from 'prop-types';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
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
