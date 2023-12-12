import React from 'react';

function ShareButton({ data }) {
  const handleShare = async () => {
    try {
      await navigator.share(data);
      console.log('Data was shared successfully');
    } catch (err) {
      console.error('Share failed:', err.message);
    }
  };

  return (
    <button 
    className="fixed bottom-0 right-0 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleShare}
    >
      Share
    </button>
  );
}

export default ShareButton;
