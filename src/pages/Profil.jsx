import React from "react";
import FormVinyl from "../components/Form/FormVinyl";

const Profil = () => {
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
      <FormVinyl />
    </div>
  );
};

export default Profil;
