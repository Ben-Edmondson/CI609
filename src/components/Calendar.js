import React from 'react';

function WeeklyCalendar() {
    const weekData = [
        { day: 'Monday', date: '12/04/2023', mood: 'Happy', temperature: '20°C', humidity: '40%', airQuality: 'Good', precipitation: '0%' },
        { day: 'Tuesday', date: '12/05/2023', mood: 'Energetic', temperature: '22°C', humidity: '35%', airQuality: 'Moderate', precipitation: '10%' },
        { day: 'Wednesday', date: '12/06/2023', mood: 'Calm', temperature: '18°C', humidity: '50%', airQuality: 'Poor', precipitation: '0%' },
        { day: 'Thursday', date: '12/07/2023', mood: 'Reflective', temperature: '16°C', humidity: '60%', airQuality: 'Unhealthy', precipitation: '20%' },
        { day: 'Friday', date: '12/08/2023', mood: 'Excited', temperature: '25°C', humidity: '30%', airQuality: 'Fair', precipitation: '5%' },
        { day: 'Saturday', date: '12/09/2023', mood: 'Relaxed', temperature: '15°C', humidity: '45%', airQuality: 'Good', precipitation: '0%' },
        { day: 'Sunday', date: '12/10/2023', mood: 'Peaceful', temperature: '21°C', humidity: '42%', airQuality: 'Moderate', precipitation: '15%' }
    ];
    
    const handleArrowClick = (day) => {
        console.log(`Arrow clicked for ${day}`);
    };
    return (
        <div className="max-w-full bg-gray-900 p-4">
            <h2 className="text-xl font-bold text-white mb-4">Weekly Calendar</h2>
            <div className="flex flex-col">
                {weekData.map((data, index) => (
                    <div key={index} className="bg-gray-700 shadow rounded-lg p-4 mb-2 last:mb-0 relative">
                        <div className="flex flex-col sm:flex-row justify-between items-center text-white">
                            <div className="font-bold text-xl sm:text-lg mr-4">{data.date}</div>
                            <div className="flex items-center w-full">
                                <div className="font-medium text-lg mr-4 sm:border-r sm:border-white sm:pr-4">{data.day}</div>
                                <div className="flex flex-wrap justify-between flex-grow text-sm mt-2 sm:mt-0">
                                    <span className="w-1/2 sm:w-auto">Mood: {data.mood}</span>
                                    <span className="w-1/2 sm:w-auto">Temp: {data.temperature}</span>
                                    <span className="w-1/2 sm:w-auto">Humidity: {data.humidity}</span>
                                    <span className="w-1/2 sm:w-auto">Air Quality: {data.airQuality}</span>
                                    <span className="w-1/2 sm:w-auto">Precipitation: {data.precipitation}</span>
                                    <div className="w-1/2 sm:w-auto flex justify-end">
                                        <button
                                            onClick={() => handleArrowClick(data.day)}
                                            className="text-white text-2xl">
                                            ➔
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeeklyCalendar;

