import React, { useEffect } from 'react';
import fetchAndSaveWeatherData from '../utilities/GetWeatherData';

function WeatherDataFetcher() {
  useEffect(() => {
    // Function to run the fetch and save weather data
    const runDailyWeatherFetch = async () => {
      await fetchAndSaveWeatherData();
      setTimeout(runDailyWeatherFetch, 24 * 60 * 60 * 1000); // 24 hours delay
    };

    // Start the function initially
    runDailyWeatherFetch();
  }, []);

  return null; 
}

export default WeatherDataFetcher;
