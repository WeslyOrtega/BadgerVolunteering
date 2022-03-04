import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from "./pages/Results";
import "./App.css";
import Welcome from "./pages/Welcome";
import NodeEdit from "./pages/NodeEdit";
import ThankYou from "./pages/ThankYou";
function App() {
  return (
    <div className="m-auto pl-4 pr-4 lg:pl-2 lg:pr-2 lg:max-w-5xl ">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="node-edit" element={<NodeEdit />} />
        <Route path="thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
