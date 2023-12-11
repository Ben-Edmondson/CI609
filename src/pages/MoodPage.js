import React, { useEffect, useState } from 'react';
import DayData from '../components/DayData';
import TakeMeHome from '../components/TakeMeHome';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import { useParams } from 'react-router-dom';
import { decryptData } from '../utilities/EncryptAndDecrypt';

function DayPage() {
  const { uuid } = useParams();

  const [moodEntry, setMoodEntry] = useState(null);

  useEffect(() => {
    const storedMoodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
    const decryptedMoodEntries = storedMoodEntries.map((entry) => decryptData(entry));

    const matchingEntry = decryptedMoodEntries.find((entry) => entry.id === uuid);

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
