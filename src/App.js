import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home2/Home';
import Navbar from './components/Navbar/Navbar';
import MyWork from './pages/MyWork/MyWork';
import SWCWork from './pages/SWCWork/SWCWork';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';

import './App.css';

function App() {
  const HomePage = () => (
    <>
      <div id="home">
        <Home />
      </div>
      <div id='projects'>
        <MyWork />
        <SWCWork />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:projectId" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
