import { v4 as uuidv4 } from 'uuid';
import { encryptData } from './EncryptAndDecrypt';

function saveMoodData(
  selectedOption,
  reflection,
  currentDate,
  currentTime,
  temperature,
  humidity,
) {
  const formattedDate = currentDate.replace(/\//g, '-');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = daysOfWeek[new Date().getDay()];

  const moodEntry = {
    id: uuidv4(),
    mood: selectedOption,
    reflection,
    date: formattedDate,
    time: currentTime,
    temperature,
    humidity,
    day
  };

  const existingData = JSON.parse(localStorage.getItem('moodEntries')) || [];

  const encryptedMoodEntry = encryptData(moodEntry);
  existingData.push(encryptedMoodEntry);

  localStorage.setItem('moodEntries', JSON.stringify(existingData));
  console.log('Mood data saved:', localStorage.getItem('moodEntries'));
}

export default saveMoodData;
