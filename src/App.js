import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import MyWork from './pages/MyWork/MyWork';
import SWCWork from './pages/SWCWork/SWCWork';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MyWork />
      <SWCWork />
    </div>
  );
}

export default App;
