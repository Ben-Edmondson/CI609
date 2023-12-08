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
        <MoodForm selectedOption={selectedOption} onOptionChange={handleOptionChange} />
    </div>
  );
}

export default Logging;
