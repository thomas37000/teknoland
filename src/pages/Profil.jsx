import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../firebase/config";
import LogOut from "../components/Auth/LogOut";
import FormVinyl from "../components/Form/FormVinyl";

const Profil = () => {
  const navigate = useNavigate();

  const signOut = async (e) => {
    e.preventDefault();

    await Auth.signOut()
      .then(function () {
        console.log("Successfully signed out.");
      })
      .catch(function (error) {
        console.log(error);
        console.log("An error occurred");
      });
    // window.localStorage.removeItem("name");
    navigate("/");
  };

  // const signOut = () => {
  //   Auth.signOut();
  // };

  return (
    <div className="flex flex-wrap justify-around mt-10">
      <div className="max-w-xs overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src={localStorage.getItem("profilImage")}
          alt={localStorage.getItem("name")}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-2xl font-bold">
            {localStorage.getItem("name")}
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-green-800">
            {localStorage.getItem("email")}
          </div>
        </div>
      </div>
      <div className="logout">
        <LogOut signOut={signOut} />
      </div>
      <FormVinyl />
    </div>
  );
};

export default Profil;
