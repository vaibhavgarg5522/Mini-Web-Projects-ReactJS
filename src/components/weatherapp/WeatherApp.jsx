import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1cb4b7d5b0616c835ec792b366608d71&units=metric`
      );
      setWeather(response);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const handleGetWeather = () => {
    fetchWeather();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-amber-50 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Weather App</h1>

      <div className="flex flex-col items-center bg-sky-200 w-full max-w-[680px] h-auto sm:h-[490px] rounded-2xl p-5 sm:p-8">
        <input
          className="border mt-2 bg-amber-50 w-full rounded h-[40px] px-3 text-base"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={handleCityChange}
        />
        <button
          onClick={handleGetWeather}
          className="border bg-sky-600 hover:bg-blue-800 transition-all duration-500 text-white rounded-full px-6 py-2 mt-6 text-base"
        >
          Get Weather
        </button>

        {weather && (
          <div className="flex flex-col mt-8 text-xl sm:text-2xl gap-4 items-center text-center">
            <h3 className="font-semibold text-2xl sm:text-4xl">{weather.data.name}</h3>
            <p>Temp: {weather.data.main.temp}°C</p>
            <p>{weather.data.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
