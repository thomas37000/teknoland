import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardVinylById from "../components/Cards/CardVinylById";
import Discography from "../pages/Discography";
import Navbar from "../components/NavBar/Navbar";
import Contact from "../pages/Contact";
import Artists from "../pages/Artists";
import Profil from "../pages/Profil";
import Home from "../pages/Home";
import SignIn from "../components/Auth/SignIn";
import { Auth } from "../firebase/config";
import NavbarLogOut from "../components/NavBar/NavbarLogOut";

const ReactRouter = () => {
  const [isSign, setIsSign] = useState(true);

  Auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsSign(true);
    } else {
      setIsSign(false);
    }
  });

  if (isSign === true) {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/vinyl/:id" element={<CardVinylById />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          {/*  <Route path="/log-in" element={< />} /> */}
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <NavbarLogOut />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/vinyl/:id" element={<CardVinylById />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/sign-up" element={<SignIn />} />
          {/*  <Route path="/log-in" element={< />} /> */}
        </Routes>
      </Router>
    );
  }
};

export default ReactRouter;
