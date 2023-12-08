import React, { useState } from 'react';
import TakeMeHome from '../components/TakeMeHome';
import PageWrapper from '../components/PageWrapper'

function LogPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: "Happy" },
    { id: 2, label: "Okay" },
    { id: 3, label: "Sad" },
  ];

  const handleOptionClick = (id) => {
    setSelectedOption(id);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Select an Option</h2>
        
        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`px-4 py-2 rounded-md text-white font-semibold ${selectedOption === option.id ? 'bg-blue-500' : 'bg-gray-500'}`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <TakeMeHome />
      </div>
    </div>
  );
}

export default PageWrapper(LogPage);
