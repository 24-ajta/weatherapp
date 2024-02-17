
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemperatureComponent from './components/TemperatureComponent';
import WeatherConditionsComponent from './components/WeatherConditionsComponent';
import WeatherIconComponent from './components/WeatherIconComponent';
import LocationComponent from './components/LocationComponent';
import ToggleUnitComponent from './components/ToggleUnitComponent';
import './App.css';

const WeatherApp = () => {
  const [temperature, setTemperature] = useState(25);
  const [weatherConditions, setWeatherConditions] = useState('Sunny');
  const [location, setLocation] = useState('CityName');
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
  };

  const handleLocationChange = async (newLocation) => {
    setLocation(newLocation);

    try {
      const apiKey = 'd01f9847194d6f55293688f513b68e0d';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=${apiKey}&units=metric`);

      const data = response.data;

      setTemperature(data.main.temp);
      setWeatherConditions(data.weather[0].description);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    handleLocationChange(location);
  }, []); 

  return (
    <div className="weather-app">
      <div className="moon"></div>
      <div className="weather-heading" data-attr-text="SkyCast">SkyCast</div>
      <div className="weather-box">
        <TemperatureComponent temperature={temperature} isCelsius={isCelsius} />
        <WeatherConditionsComponent weatherConditions={weatherConditions} />
        <WeatherIconComponent weatherConditions={weatherConditions} />
        <LocationComponent location={location} onLocationChange={handleLocationChange} />
        <ToggleUnitComponent
          isCelsius={isCelsius}
          toggleTemperatureUnit={toggleTemperatureUnit}
        />
      </div>
      <div className="footer">
        <p>&copy; 2024 WeatherEase App. All rights reserved.</p>
      </div>
    </div>
  );
};

export default WeatherApp;
