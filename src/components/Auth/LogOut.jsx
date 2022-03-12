import React from "react";

const LogOut = ({ logout }) => {
  return (
    <button
      type="button"
      onClick={logout}
      className="px-4 py-2 font-bold text-red-500"
    >
      logout
    </button>
  );
};

export default LogOut;
