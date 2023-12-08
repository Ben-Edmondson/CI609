import './App.css';
import Home from './pages/home';
import LogPage from './pages/logpage';
import Manage from './pages/Manage';
import FAQ from './pages/FAQ';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DayPage from './pages/MoodPage';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/logpage" element={<LogPage />} />
    <Route path="/Manage" element={<Manage />} />
    <Route path="/FAQ" element={<FAQ />} />
    <Route path='/Day' element={<DayPage />} />
    <Route path="/*" element = {<Error />} />
    </Routes>
  );
}

export default App;
