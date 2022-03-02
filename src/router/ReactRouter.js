import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Discography from "../pages/Discography";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact";
import Artists from "../pages/Artists";
import Home from "../pages/Home";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/discography" element={<Discography />} />
        <Route exact path="/artists" element={<Artists />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default ReactRouter;
