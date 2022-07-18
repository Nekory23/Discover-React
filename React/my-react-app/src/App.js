import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
return (
    <Router>
		<Navbar/>
    <Routes>
        <Route path='/' 				element={<Home/>} />
        <Route path='/about-us' 		element={<AboutUs/>} />
    </Routes>
    </Router>
	);
}
  
export default App;
