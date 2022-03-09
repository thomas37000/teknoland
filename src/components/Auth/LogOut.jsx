import React from "react";

const LogOut = ({ signOut }) => {
  return (
    <button
      type="button"
      onClick={signOut}
      className="px-4 py-2 font-bold text-white bg-red-500 rounded"
    >
      logout
    </button>
  );
};

export default LogOut;
