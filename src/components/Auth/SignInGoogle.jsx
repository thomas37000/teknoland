import React from "react";
import { useNavigate } from "react-router-dom";
//auth from firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Auth } from "../../firebase/config";

const SignInGoogle = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(Auth, googleProvider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profileImage = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profileImage", profileImage);
        console.log(result);
        navigate("/private/profil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        type="button"
        onClick={signInWithGoogle}
        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded"
      >
        sign up with Google
      </button>
    </div>
  );
};

export default SignInGoogle;
