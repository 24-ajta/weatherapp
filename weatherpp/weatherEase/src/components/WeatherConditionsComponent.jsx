import React from 'react';
import PropTypes from 'prop-types';

const WeatherConditionsComponent = ({ weatherConditions }) => {
  return <div className="weather-conditions" style={{"color":"white"}}>🌦️ Weather Conditions: {weatherConditions}</div>;
};
WeatherConditionsComponent.propTypes = {
    weatherConditions: PropTypes.string.isRequired,
};
export default WeatherConditionsComponent;
