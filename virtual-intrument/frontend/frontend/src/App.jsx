import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Piano from "./Piano";
import Feedback from "./Feedback";
import About from "./About";
import Navbar from "./nav";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
