import React from 'react';
import PropTypes from 'prop-types';
// import Planets from '../data/planets';

class PlanetCard extends React.Component {
  render() {
    const { cardinfo } = this.props;
    const { name, image } = cardinfo;
    return (
      <div data-testid="planet-card">
        <p>{ name }</p>
        <img src={ image } alt="" />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  cardinfo: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

PlanetCard.defaultProps = {
  cardinfo: undefined,
};

export default PlanetCard;
