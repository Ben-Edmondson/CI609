import React, { useState, useEffect } from 'react';

function WeeklyCalendar() {
  // State to store mood data
  const [moodData, setMoodData] = useState([]);

  // Function to fetch and set mood data from localStorage
  useEffect(() => {
    const storedMoodData = localStorage.getItem('moodEntries');
    if (storedMoodData) {
      setMoodData(JSON.parse(storedMoodData));
    }
  }, []); // Run this effect once on component mount

  const handleArrowClick = (day) => {
    console.log(`Arrow clicked for ${day}`);
  };

  return (
    <div className="max-w-full bg-gray-900 p-4">
      <h2 className="text-xl font-bold text-white mb-4">Weekly Calendar</h2>
      <div className="flex flex-col">
        {moodData.length === 0 ? (
          <div>No entries</div>
        ) : (
          moodData.map((data, index) => (
            <div key={index} className="bg-gray-700 shadow rounded-lg p-4 mb-2 last:mb-0 relative">
              <div className="flex flex-col sm:flex-row justify-between items-center text-white">
                <div className="font-bold text-xl sm:text-lg mr-4">{data.date}</div>
                <div className="flex items-center w-full">
                  <div className="font-medium text-lg mr-4 sm:border-r sm:border-white sm:pr-4">{data.day}</div>
                  <div className="flex flex-wrap justify-between flex-grow text-sm mt-2 sm:mt-0">
                    <span className="w-1/2 sm:w-auto">Mood: {data.mood}</span>
                    <span className="w-1/2 sm:w-auto">Temp: {data.temperature}</span>
                    <span className="w-1/2 sm:w-auto">Humidity: {data.humidity}</span>
                    <span className="w-1/2 sm:w-auto">Air Quality: {data.airQuality}</span>
                    <span className="w-1/2 sm:w-auto">Precipitation: {data.precipitation}</span>
                    <div className="w-1/2 sm:w-auto flex justify-end">
                      <button
                        onClick={() => handleArrowClick(data.day)}
                        className="text-white text-2xl">
                        ➔
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WeeklyCalendar;
