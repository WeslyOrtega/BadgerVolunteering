import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import logo from "./assets/logo.png";
import "./App.css";
import { useState, useEffect } from "react";
import { Message } from "./components/Message/Message";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setState(data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {/* <img src={logo} alt="Badger logo" />
      <div className="Title">BADGER</div>
      <Message prop={state} /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
