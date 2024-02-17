import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './location.css';
const LocationComponent = ({ location, onLocationChange }) => {
  const [inputLocation, setInputLocation] = useState(location);

  const handleLocationChange = (event) => {
    setInputLocation(event.target.value);
  };

  const handleLocationSubmit = () => {
    console.log('Set Location button clicked');
    onLocationChange(inputLocation);
  };

  return (
    <div className="location">
      🌎 Location:
      <input
        type="text"
        value={inputLocation}
        onChange={handleLocationChange}
      />
      <button onClick={handleLocationSubmit}>Set Location</button>
    </div>
  );
};

LocationComponent.propTypes = {
  location: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default LocationComponent;
