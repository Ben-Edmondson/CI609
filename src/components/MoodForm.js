import React, { useState } from 'react';
import saveMoodData from '../utilities/SaveMoodData'

function MoodForm({ selectedOption, onOptionChange }) {
  const [reflection, setReflection] = useState('');
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const temperature = "72°F"; // Replace with actual temperature data
  const humidity = "50%"; // Replace with actual humidity data
  const airQuality = "Good"; // Replace with actual air quality data
  const precipitation = "0.00 in"; // Replace with actual precipitation data

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const temperature = "72°F"; // Replace with actual temperature data
    const humidity = "50%"; // Replace with actual humidity data
    const airQuality = "Good"; // Replace with actual air quality data
    const precipitation = "0.00 in"; // Replace with actual precipitation data
  
    // Save all the data to localStorage
    saveMoodData(
      selectedOption,
      reflection,
      currentDate,
      currentTime,
      temperature,
      humidity,
      airQuality,
      precipitation
    );
  
    onOptionChange(null); 
    setReflection('');
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="bg-gray-700 shadow rounded-lg p-4 w-full max-w-xl mx-auto my-0">
        <div className="text-white text-2xl font-semibold mb-4">Log Your Mood</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Select your mood:</label>
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
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Reflection:</label>
              <textarea
                value={reflection}
                onChange={handleReflectionChange}
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300 resize-none h-40" // Adjust the height here
              ></textarea>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Date:</label>
              <input
                type="text"
                value={currentDate.toLocaleDateString()}
                readOnly
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Time:</label>
              <input
                type="text"
                value={currentTime}
                readOnly
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Temperature:</label>
              <input
                type="text"
                value={temperature}
                readOnly
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Humidity:</label>
              <input
                type="text"
                value={humidity}
                readOnly
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Air Quality:</label>
              <input
                type="text"
                value={airQuality}
                readOnly
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center">
              <label className="text-white text-lg font-semibold w-60">Precipitation:</label>
              <input
                type="text"
                value={precipitation}
                readOnly
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
              />
            </div>
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
