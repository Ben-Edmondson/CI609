import React from 'react';
import ShareButton from './ShareButton';

function DayData({ date, day, mood, temperature, humidity, reflection = "No Value" }) {
  const shareData = {
    title: `Mood Data: ${date}`,
    text: `Mood: ${mood}\nTemperature: ${temperature}\nHumidity: ${humidity}\nReflection: ${reflection}`
  };

  return (
    <div className="bg-gray-700 shadow rounded-lg p-6 my-4 text-white w-full">
      <div className="text-2xl font-bold mb-6">{date} - {day}</div>
      <div className="flex flex-col space-y-4">
        <div className="data-container bg-gray-800 p-4 rounded-lg">
          <div className="text-xl">Mood:</div>
          <div className="data-value">{mood}</div>
        </div>
        <div className="data-container bg-gray-800 p-4 rounded-lg">
          <div className="text-xl">Temperature:</div>
          <div className="data-value">{temperature}</div>
        </div>
        <div className="data-container bg-gray-800 p-4 rounded-lg">
          <div className="text-xl">Humidity:</div>
          <div className="data-value">{humidity}</div>
        </div>
        <div className="data-container bg-gray-800 p-4 rounded-lg">
          <div className="text-xl font-semibold mt-6">Message:</div>
          <div className="data-value">{reflection}</div>
        </div>
      </div>
      <ShareButton data={shareData} />
    </div>
  );
}

export default DayData;
