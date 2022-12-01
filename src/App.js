import './App.css';
import Home from './pages/landingPage/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
