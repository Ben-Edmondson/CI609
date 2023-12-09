import React, { useState } from 'react';
import TakeMeHome from '../components/TakeMeHome';
import PageWrapper from '../components/PageWrapper';
import Logging from '../components/Logging';
import Header from '../components/Header';

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
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 mb-8"> 
          <Logging />
        </div>
        <TakeMeHome />
      </div>
    </div>
  );
}

export default PageWrapper(LogPage);
