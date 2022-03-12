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
import Private from "../private/Private";
import User from "../private/user";

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
          <Route path="/sign-up" element={<SignUpModal />} />
          <Route path="/log-in" element={<SignInModal />} />
          <Route path="/private" element={<Private />}>
            <Route path="/private/profil" element={<User />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </Router>
  );
};

export default ReactRouter;
