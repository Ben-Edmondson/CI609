import './App.css';
import Home from './pages/home';
import LogPage from './pages/logpage';
import Manage from './pages/Manage';
import DayPage from './pages/MoodPage'
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/logpage" element={<LogPage />} />
    <Route path="/Manage" element={<Manage />} />
    <Route path="/day/:uuid" element={<DayPage />} />
    <Route path="/*" element = {<Error />} />
    </Routes>
  );
}

export default App;
