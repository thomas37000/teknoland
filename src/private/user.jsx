import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import FormVinyl from "../components/Form/FormVinyl";

const User = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-wrap justify-around mt-10">
        <div className="max-w-xs overflow-hidden rounded shadow-lg">
          <div
            className="flex-none h-48 bg-cover rounded-t lg:h-auto lg:w-48"
            style={{ margin: "auto" }}
          >
            <img
              className="w-full"
              src={localStorage.getItem("profileImage")}
              alt={localStorage.getItem("name")}
            />
          </div>

          <div className="px-6 py-4">
            <div className="mb-2 text-2xl font-bold">{currentUser.name}</div>
          </div>
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-green-800">
              {currentUser.email}
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="mb-2 text-2xl font-bold">
              {localStorage.getItem("name")}
            </div>
          </div>
        </div>
        <FormVinyl />
      </div>
    </>
  );
};

export default User;
