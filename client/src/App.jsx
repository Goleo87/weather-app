import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = () => {
    setLoading(true);
    fetch(`https://weather-app-mptm.onrender.com/weather/${city}`) // Send the city as part of the URL
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        {loading ? (
          <p>Loading weather data...</p>
        ) : weatherData ? (
          <div className="weather-info">
            <p><strong>Location:</strong> {weatherData.name}</p>
            <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
            <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
            <p><strong>Feels Like</strong> {weatherData.main.feels_like}°C</p>
            <p><strong>Wind:</strong> {weatherData.wind.speed} m/s</p>
            <p><strong>Condition:</strong> {weatherData.weather[0].main}</p>
          </div>
        ) : (
          <p>No data available. Please search for a city.</p>
        )}
      </header>
    </div>
  );
}

export default App;

