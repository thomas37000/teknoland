import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Private = () => {
  const { currentUser } = useContext(UserContext);

  // si l'utilisateur n'est pas connecté redirection vers l'acceuil
  // avec Navigate composant React Router
  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* { Outlet composant React Router qui permet de voir les routes imbriquées dans react router} */}
      <Outlet />
    </div>
  );
};

export default Private;
