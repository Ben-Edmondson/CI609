import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Home from '../pages/home'; 

function LockScreen() {
  const [enteredPin, setEnteredPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [invalidPin, setInvalidPin] = useState(false);

  const handlePinButtonClick = (number) => {
    setInvalidPin(false); 
    if (enteredPin.length < 4) {
      setEnteredPin(enteredPin + number);
    }
  };

  const handleDeleteButtonClick = () => {
    setInvalidPin(false); 
    if (enteredPin.length > 0) {
      setEnteredPin(enteredPin.slice(0, -1));
    }
  };

  const handleUnlockButtonClick = () => {
    const savedPin = localStorage.getItem('lockScreenPin');
  
    if (localStorage.getItem('lockScreenPin')) {
      if (enteredPin === savedPin) {
        setIsUnlocked(true);
      } else {
        setInvalidPin(true);
      }
    } else {
      if (enteredPin.length === 4) {
        localStorage.setItem('lockScreenPin', enteredPin);
        setIsUnlocked(true);
      } else {
        setInvalidPin(true);
      }
    }
  
    setEnteredPin('');
  };

  if (isUnlocked) {
    return <Home />;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
      <div className="text-white text-3xl mb-6">
        {localStorage.getItem('lockScreenPin') ? 'Enter PIN' : 'Create a PIN'}
      </div>
      <div className="w-24 h-24 mb-6 rounded-full bg-gray-700 flex items-center justify-center">
        {enteredPin.split('').map((digit, index) => (
          <div key={index} className="text-3xl text-white">
            '*'
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 10 }, (v, i) => i).map((number) => (
          <button
            key={number}
            onClick={() => handlePinButtonClick(number)}
            className="text-white text-2xl p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
          >
            {number}
          </button>
        ))}
        <button
          onClick={handleDeleteButtonClick}
          className="text-white text-2xl p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
        >
          ⌫
        </button>
        <button
          onClick={handleUnlockButtonClick}
          className="text-white text-2xl p-2 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
        >
          ➡
        </button>
      </div>
      {invalidPin && <div className="text-red-500 mt-2">Invalid PIN</div>}
    </div>
  );
}

export default PageWrapper(LockScreen);
