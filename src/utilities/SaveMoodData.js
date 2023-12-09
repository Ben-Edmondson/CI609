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
    mood: selectedOption,
    reflection,
    date: formattedDate, // Use the formatted date
    time: currentTime,
    temperature,
    humidity,
    airQuality,
    precipitation,
  };

  const existingData = JSON.parse(localStorage.getItem('moodEntries')) || [];

  existingData.push(moodEntry);

  localStorage.setItem('moodEntries', JSON.stringify(existingData));
  console.log('Mood data saved:', localStorage.getItem('moodEntries'));
}

export default saveMoodData;
