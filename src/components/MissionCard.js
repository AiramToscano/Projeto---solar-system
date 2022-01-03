import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div className="divmiss" data-testid="mission-card">
        <p className="pname" data-testid="mission-name">
          { name }
        </p>
        <p data-testid="mission-year">
          { year }
        </p>
        <p data-testid="mission-country">
          { country }
        </p>
        <p data-testid="mission-destination">
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.PropTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
