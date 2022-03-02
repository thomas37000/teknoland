import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/discography" element={<Home />} />
        <Route exact path="/artists" element={<Home />} />
        <Route exact path="/contact" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default ReactRouter;
