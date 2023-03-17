import './App.css';
import React from 'react';
import MyNavbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import FooterBar from "./components/footer/footerbar";
import Dragonfly from "./pages/dragonfly";
import PokemonBlitz from "./pages/pokemonblitz";
import RoyalSiege from "./pages/royalsiege";

function App() {
  return (
    <div className="App">
        <Router>
            <MyNavbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/projects' element={<Projects />} />
                <Route exact path='/dragonfly' element={<Dragonfly />} />
                <Route exact path='/pokemon-blitz' element={<PokemonBlitz />} />
                <Route exact path='/royal-siege' element={<RoyalSiege />} />
            </Routes>
        </Router>
        <FooterBar />
    </div>
  );
}

export default App;
