import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import LogOut from "../Auth/LogOut";

const Navbar = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      await signOut(Auth);
      navigate("/");
    } catch {
      alert("vider votre cache internet.");
    }
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-zinc-800">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link to="/">
          <span className="text-xl font-semibold tracking-tight">
            Teknoland Production
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-white border rounded border-black-400 hover:text-green-500 hover:border-white">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-red-500"
          >
            Home
          </Link>

          <Link
            to="/discography"
            className="block mt-4 mr-4 text-green-500 lg:inline-block lg:mt-0 hover:text-white"
          >
            Discography
          </Link>

          <Link
            to="/artists"
            className="block mt-4 mr-4 text-green-500 lg:inline-block lg:mt-0 hover:text-white"
          >
            Artists
          </Link>

          <Link
            to="/contact"
            className="block mt-4 mr-4 text-green-500 lg:inline-block lg:mt-0 hover:text-white"
          >
            Contact
          </Link>

          <Link
            to="/profil"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-red-500"
          >
            <img
              className="inline object-cover w-6 h-6 rounded-full"
              src="https://buildyourspechere.com/wp-content/uploads/2020/10/placeholder-image-person-jpg.jpg"
              alt="profil page"
            />
            <div className="block mt-4 ml-2 mr-4 text-yellow-300 lg:inline-block lg:mt-0">
              {localStorage.getItem("name")}
            </div>
            {/* <LogOut signOut={signOut} /> */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
