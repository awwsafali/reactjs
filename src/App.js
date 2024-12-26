import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Navbar from './comps/Navbar';
import Slider from './comps/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
