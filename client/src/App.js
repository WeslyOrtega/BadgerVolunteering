import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from './pages/Results'
import "./App.css";
import Welcome from "./pages/Welcome";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="home" element={<Home />} />
        <Route path="results" element={<Results />} />

      </Routes>
    </div>
  );
}

export default App;
