import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="planet" data-testid="planet-card">
        <img className="imagens" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h3 data-testid="planet-name">
          { planetName }
        </h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
