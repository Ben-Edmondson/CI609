import { v4 as uuidv4 } from 'uuid';
import { encryptData, decryptData } from './EncryptAndDecrypt';

function saveMoodData(
  selectedOption,
  reflection,
  currentDate,
  currentTime,
  temperature,
  humidity,
  airQuality,
  precipitation
) {
  const formattedDate = currentDate.replace(/\//g, '-');

  const moodEntry = {
    id: uuidv4(),
    mood: selectedOption,
    reflection,
    date: formattedDate,
    time: currentTime,
    temperature,
    humidity,
    airQuality,
    precipitation,
  };

  const existingData = JSON.parse(localStorage.getItem('moodEntries')) || [];

  const encryptedMoodEntry = encryptData(moodEntry);
  existingData.push(encryptedMoodEntry);

  localStorage.setItem('moodEntries', JSON.stringify(existingData));
  console.log('Mood data saved:', localStorage.getItem('moodEntries'));
}

export default saveMoodData;
