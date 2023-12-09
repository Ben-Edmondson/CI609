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
    // Create an object to represent the mood entry
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
  
    // Retrieve existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('moodEntries')) || [];
  
    // Add the new mood entry to the array
    existingData.push(moodEntry);
  
    // Store the updated array back in localStorage
    localStorage.setItem('moodEntries', JSON.stringify(existingData));
    console.log('Mood data saved:', localStorage.getItem('moodEntries'));
  }
  
  export default saveMoodData;
  