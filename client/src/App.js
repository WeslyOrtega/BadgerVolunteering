import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import "./App.css";
import Welcome from "./pages/Welcome";
import ThankYou from "./pages/ThankYou";
function App() {
  return (
    <div className="m-auto md:pl-4 md:pr-4 lg:pl-2 lg:pr-2 lg:max-w-5xl ">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
