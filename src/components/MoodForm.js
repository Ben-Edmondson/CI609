import React, { useState, useEffect } from 'react';
import saveMoodData from '../utilities/SaveMoodData';
import { useNavigate } from 'react-router-dom';

function MoodForm({ selectedOption, onOptionChange }) {
  const [reflection, setReflection] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const storedWeatherData = localStorage.getItem('weatherData');
    if (storedWeatherData) {
      setWeatherData(JSON.parse(storedWeatherData));
    }
  }, []);

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const temperature = weatherData ? `${weatherData.main.temp}°F` : 'Unknown';
    const humidity = weatherData ? `${weatherData.main.humidity}%` : 'Unknown';

    saveMoodData(
      selectedOption,
      reflection,
      currentDate,
      currentTime,
      temperature,
      humidity
    );

    onOptionChange(null);
    setReflection('');

    navigate('/manage');
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="bg-gray-700 shadow rounded-lg p-4 w-full max-w-xl mx-auto my-0">
        <div className="text-white text-2xl font-semibold mb-4">Log Your Mood</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center">
            <label className="text-white text-lg font-semibold mb-2 sm:mb-0 sm:mr-4">Select your mood:</label>
            <select
              value={selectedOption || ''}
              onChange={(e) => onOptionChange(e.target.value)}
              className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Happy">Happy</option>
              <option value="Okay">Okay</option>
              <option value="Sad">Sad</option>
            </select>
          </div>

          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center">
            <label className="text-white text-lg font-semibold mb-2 sm:mb-0 sm:mr-4">Reflection:</label>
            <textarea
              value={reflection}
              onChange={handleReflectionChange}
              className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300 resize-none h-40"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Log Mood
          </button>
        </form>
      </div>
    </div>
  );
}

export default MoodForm;
