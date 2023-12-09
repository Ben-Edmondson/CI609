// SaveMoodData.js

// Function to save mood data to localStorage
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
    const moodEntry = {
      mood: selectedOption,
      reflection,
      date: currentDate,
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
  