function Weather() {
  const moodEntries = JSON.parse(localStorage.getItem('moodEntries')) || [];
  const daysLogged = moodEntries.length;

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dayOfWeek];

  const stats = [
    { name: 'Reflections Logged', value: daysLogged },
    { name: 'Day of the Week', value: dayName },
  ];

  return (
<div className="flex flex-1 justify-center">
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col items-center justify-center">
            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default Weather;
