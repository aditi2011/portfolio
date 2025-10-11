import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home2/Home';
import Navbar from './components/Navbar/Navbar';
import MyWork from './pages/MyWork/MyWork';
import SWCWork from './pages/SWCWork/SWCWork';
import CaseStudy from './pages/CaseStudy/CaseStudy';

import './App.css';

function App() {
  const HomePage = () => (
    <>
      <Home />
      <MyWork />
      <SWCWork />
    </>
  );

  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/:projectId" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
