import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import "./App.css";
import Welcome from "./pages/Welcome";
import NodeEdit from "./pages/NodeEdit";
import ThankYou from "./pages/ThankYou";
import Tool from './pages/Tool'
import HomeV2 from './pages/HomeV2'
import Spinner from "./components/Spinner";
function App() {
  return (
    <div className="m-auto pl-4 pr-4 lg:pl-2 lg:pr-2 lg:max-w-5xl ">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/v2" element={<HomeV2 />} />
        <Route path="/spinner" element={<Spinner />} />

        <Route path="home" element={<Home />} />
        <Route path="results" element={<Results />} />
        <Route path="node-edit" element={<NodeEdit />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="tooling" element={<Tool />} />

      </Routes>
    </div>
  );
}

export default App;
