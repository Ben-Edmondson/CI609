// Logging.js
import React, { useState } from 'react';
import MoodForm from './MoodForm';

function Logging() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4">
        <MoodForm selectedOption={selectedOption} onOptionChange={handleOptionChange} />
      </div>
    </div>
  );
}

export default Logging;
