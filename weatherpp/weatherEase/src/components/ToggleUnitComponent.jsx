// ToggleUnitComponent.js
import React from 'react';
import PropTypes from 'prop-types';

const ToggleUnitComponent = ({ isCelsius, toggleTemperatureUnit }) => {
  return (
    <div className="toggle-unit" style={{"color":"white"}}>
      🔄 Toggle:
      <button onClick={toggleTemperatureUnit}>
        {isCelsius ? 'Celsius' : 'Fahrenheit'}
      </button>
    </div>
  );
};
ToggleUnitComponent.propTypes = {
    toggleTemperatureUnit: PropTypes.string.isRequired,
    isCelsius:PropTypes.string.isRequired,
};
export default ToggleUnitComponent;
