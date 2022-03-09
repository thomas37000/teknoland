import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";
import CardVinylById from "../components/Cards/CardVinylById";
import SignUpModal from "../components/Modals/SignUpModal";
import SignInModal from "../components/Modals/SignInModal";
import Navbar from "../components/NavBar/Navbar";
import Discography from "../pages/Discography";
import Contact from "../pages/Contact";
import Artists from "../pages/Artists";
import Profil from "../pages/Profil";
import Home from "../pages/Home";

const ReactRouter = () => {
  return (
    <Router>
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/vinyl/:id" element={<CardVinylById />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/sign-up" element={<SignUpModal />} />
          <Route path="/log-in" element={<SignInModal />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
};

export default ReactRouter;
