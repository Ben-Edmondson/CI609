import React, { useState } from 'react';

function MoodForm({ selectedOption, onOptionChange }) {
  const [reflection, setReflection] = useState('');

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can now access the selected mood (selectedOption) and reflection here
    console.log('Selected Mood:', selectedOption);
    console.log('Reflection:', reflection);

    // Perform any further actions here, e.g., API requests or state updates
    onOptionChange(null); // Clear the selected mood

    // Clear the reflection input field
    setReflection('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-700 shadow rounded-lg p-4 w-full max-w-lg">
        <div className="text-white text-2xl font-semibold mb-4">Log Your Mood</div> {/* Header */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4 flex flex-col">
            <label className="text-white text-lg font-semibold mb-1">Select your mood:</label>
            <select
              value={selectedOption || ''}
              onChange={(e) => onOptionChange(e.target.value)}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Happy">Happy</option>
              <option value="Okay">Okay</option>
              <option value="Sad">Sad</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="text-white text-lg font-semibold mb-1">Reflection:</label>
            <textarea
              value={reflection}
              onChange={handleReflectionChange}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring focus:border-indigo-300 resize-none"
              rows="4"
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
