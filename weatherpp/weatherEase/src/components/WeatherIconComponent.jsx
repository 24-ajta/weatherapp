import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

const WeatherIconComponent = ({ weatherConditions }) => {
  const iconMapping = {
    'Clear sky': faSun,
    'few clouds': faCloud,
    'Rain': faCloudShowersHeavy,
  };

  const selectedIcon = iconMapping[weatherConditions] || faSun; 

  return (
    <div className="weather-icon" style={{"color":"white"}}>
      <FontAwesomeIcon icon={selectedIcon} size="2x" />
    </div>
  );
};

WeatherIconComponent.propTypes = {
  weatherConditions: PropTypes.string.isRequired,
};

export default WeatherIconComponent;
