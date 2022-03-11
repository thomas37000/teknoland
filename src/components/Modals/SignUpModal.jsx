import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const SignUpModal = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const { modalState, toggleModals, signUpContext } = useContext(UserContext);

  const [validationMp, setValidationMp] = useState("");
  const [validationEmail, setValidationEmail] = useState("");

  const inputs = useRef([]);
  const currentRef = inputs.current;

  // si il existe et qu'il est pas déjà dans le tableau inputs => je le rajoute & push
  const addInputs = (el) => {
    if (el && !currentRef.includes(el)) {
      currentRef.push(el);
    }
  };

  const formRef = useRef();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    if ((currentRef[2].value.length || currentRef[3].value.length) < 6) {
      setValidationMp("6 charactères minimum !");
      return;
    } else if (currentRef[2].value !== currentRef[3].value) {
      setValidationMp("Mot de Passe incorrect !");
      return;
    }
    try {
      const createUser = await signUpContext(
        currentRef[0].value,
        currentRef[1].value
      );
      console.log("new user", createUser);

      formRef.current.reset();
      toggleModals("close");
      // quand user s'inscrit redirection vers la route privée
      navigate("/private/profil");
    } catch (error) {
      // voir les érreurs venant de Firebase dans la console au submit
      // console.dir(error);}
      if (error.code === "auth/invalid-email") {
        setValidationEmail("Email format invalide !");
      }

      if (error.code === "auth/email-already-in-use") {
        setValidationEmail("Email déjà utilisé ou enregistré !");
      }
    }
  };

  // efface les méssages d'érreurs et ferme le modale avec toggleModals
  const closeModal = () => {
    setValidationMp("");
    setValidationEmail("");
    toggleModals("close");
    navigate("/");
  };

  return (
    <>
      {modalState.signUpModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t ">
                  <h3 className="text-3xl font=semibold">Sign Up</h3>
                  <button
                    className="float-right text-black bg-transparent border-0"
                    onClick={() => closeModal()}
                  >
                    <span className="block w-6 h-6 py-0 text-xl text-black bg-gray-400 rounded-full opacity-7">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <form
                    className="w-full px-8 pt-6 pb-8 bg-gray-200 rounded shadow-md"
                    onSubmit={handleForm}
                    ref={formRef}
                  >
                    <div>
                      <label className="block mb-1 text-sm font-bold text-black">
                        Name
                      </label>

                      <input
                        className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                        ref={addInputs}
                      />
                    </div>

                    <div>
                      <label className="block mt-3 mb-1 text-sm font-bold text-black">
                        Email Address
                      </label>

                      <input
                        className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                        ref={addInputs}
                      />
                      <p className="text-red-500">{validationEmail}</p>
                    </div>

                    <div>
                      <label
                        htmlFor="signUpPwd"
                        className="block mt-3 mb-1 text-sm font-bold text-black"
                      >
                        Create a password
                      </label>
                      <input
                        ref={addInputs}
                        className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                        type="password"
                        name="pwd"
                        autoComplete="on"
                        required
                      />
                      <p className="text-red-500">{validationMp}</p>
                    </div>

                    <div>
                      <label
                        htmlFor="signUpPwd"
                        className="block mt-3 mb-1 text-sm font-bold text-black"
                      >
                        Repeat the password
                      </label>
                      <input
                        ref={addInputs}
                        className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                        type="password"
                        name="pwd"
                        autoComplete="on"
                        required
                      />
                    </div>
                    <p className="text-red-500">{validationMp}</p>

                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                      <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                        type="button"
                        onClick={() => closeModal()}
                      >
                        Close
                      </button>
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-yellow-700 hover:shadow-lg focus:outline-none"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignUpModal;
