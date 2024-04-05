import logo from './logo.svg';
import './Assets/Style/main.scss';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;
