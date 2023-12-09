import React, { useEffect, useState } from 'react';
import DayData from '../components/DayData';
import TakeMeHome from '../components/TakeMeHome';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import { useParams } from 'react-router-dom';

function DayPage() {
  const { date } = useParams();

  const [dayData, setDayData] = useState(null);

  useEffect(() => {
    const storedMoodEntries = localStorage.getItem('moodEntries');

    if (storedMoodEntries) {
      const moodEntries = JSON.parse(storedMoodEntries);

      const matchingEntry = moodEntries.find((entry) => entry.date === date);

      if (matchingEntry) {
        setDayData(matchingEntry);
      }
    }
  }, [date]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Header />
      {dayData ? <DayData {...dayData} /> : <div>No data found for this date</div>}
      <TakeMeHome />
    </div>
  );
}

export default PageWrapper(DayPage);
