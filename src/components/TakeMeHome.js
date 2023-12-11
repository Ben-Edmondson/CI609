import { useNavigate } from 'react-router-dom';
import Home from '../pages/home';

export default function TakeMeHome() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/home') 
    };
  
    return (
        <button 
            className="fixed bottom-0 left-0 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={goToHomePage}>
            Home
        </button>
    );
}
