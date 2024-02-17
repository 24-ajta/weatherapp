import React from 'react';
import PropTypes from 'prop-types';

const TemperatureComponent = ({ temperature, isCelsius }) => {
  const displayTemperature = isCelsius
    ? `${temperature}°C`
    : `${(temperature * 9/5) + 32}°F`;

  return (
    <div className="temperature-container">
      <div className='temperature-heading' data-attr-text="Weather">Weather</div>
      <div className="temperature"  style={{"color":"white"}}>🌡️ Current Temperature: {displayTemperature}</div>
    </div>
  );
};

TemperatureComponent.propTypes = {
  temperature: PropTypes.string.isRequired,
  isCelsius: PropTypes.string.isRequired,
};

export default TemperatureComponent;
