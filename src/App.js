import './App.css';
import Home from './pages/home';
import LogPage from './pages/logpage';
import Manage from './pages/Manage';
import DayPage from './pages/MoodPage'
import Error from './pages/Error';
import WeatherDataFetcher from './utilities/DailyWeatherFetch';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LockScreen from './pages/LockScreen';

function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<LockScreen />}/>
    <Route path="/logpage" element={<LogPage />} />
    <Route path="/Manage" element={<Manage />} />
    <Route path="/day/:uuid" element={<DayPage />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/*" element = {<Error />} />
    </Routes>
    <WeatherDataFetcher />
    </div>
  );
}

export default App;
