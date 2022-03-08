import React from "react";
import { signInWithGoogle } from "../../firebase/config";

const SignIn = () => {
  return (
    <div>
      <button
        type="button"
        onClick={signInWithGoogle}
        className="px-4 py-2 font-bold text-white bg-red-500 rounded"
      >
        sign in
      </button>
    </div>
  );
};

export default SignIn;
