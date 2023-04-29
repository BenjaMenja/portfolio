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
import Resume from "./pages/resume";
import Gallery from "./pages/gallery";
import TheGreatEscape from "./pages/thegreatescape";

function App() {
  return (
    <div className="App">
        <div style={{backgroundColor: 'rgba(0,0,255,0.1)'}}>
            <Router>
                <MyNavbar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/projects' element={<Projects />} />
                    <Route exact path='/resume' element={<Resume />} />
                    <Route exact path='/dragonfly' element={<Dragonfly />} />
                    <Route exact path='/pokemon-blitz' element={<PokemonBlitz />} />
                    <Route exact path='/royal-siege' element={<RoyalSiege />} />
                    <Route exact path='/royal-siege-gallery' element={<Gallery />} />
                    <Route exact path='/the-great-escape' element={<TheGreatEscape />} />
                </Routes>
            </Router>
            <FooterBar />
        </div>
    </div>
  );
}

export default App;
