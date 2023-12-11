// Function to fetch and save weather data
import axios from "axios";

async function fetchAndSaveWeatherData() {
    try {
      const apiKey = '';
  
      // Check the last execution date stored in local storage
      const lastExecutionDate = localStorage.getItem('lastWeatherFetchDate');
      const currentDate = new Date();
      
      if (!lastExecutionDate || (currentDate - new Date(lastExecutionDate)) >= 24 * 60 * 60 * 1000) {
        // Fetch weather data only if it hasn't been fetched today
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.8226&lon=-0.1370&exclude=hourly,minutely&units=metric&appid=${apiKey}`);
        
        // Handle the weather data
        const weatherData = response.data;
  
        // Save the weather data to local storage or a server
        // For local storage:
        localStorage.setItem('weatherData', JSON.stringify(weatherData));
  
        // Update the last execution date
        localStorage.setItem('lastWeatherFetchDate', currentDate.toString());
      } else {
        console.log('Weather data already fetched today.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  export default fetchAndSaveWeatherData;
