import React, { useEffect, useState } from 'react';
import DayData from '../components/DayData';
import TakeMeHome from '../components/TakeMeHome';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import { useParams } from 'react-router-dom';

function DayPage() {
  // Get the uuid parameter from the URL
  const { uuid } = useParams();

  // Define a state variable to store the mood entry
  const [moodEntry, setMoodEntry] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedMoodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];

    // Find the entry that matches the specified uuid
    const matchingEntry = storedMoodEntries.find((entry) => entry.id === uuid);

    // Set the moodEntry state with the matching entry
    if (matchingEntry) {
      setMoodEntry(matchingEntry);
    }
  }, [uuid]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Header />
      {moodEntry ? <DayData {...moodEntry} /> : <div>No data found for this date</div>}
      <TakeMeHome />
    </div>
  );
}

export default PageWrapper(DayPage);
