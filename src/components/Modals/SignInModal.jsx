import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import eyeClose from "../icons/eye-close.svg";
import eye from "../icons/eye.svg";
import "./modal.css";

const SignInModal = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const { modalState, toggleModals, signInContext } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const [mp, setMp] = useState(false);
  const togglePassword = () => {
    setMp(mp ? false : true);
  };

  const navigate = useNavigate();

  const inputs = useRef([]);
  const currentRef = inputs.current;

  const addInputs = (el) => {
    if (el && !currentRef.includes(el)) {
      currentRef.push(el);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const connexion = await signInContext(
        currentRef[0].value,
        currentRef[1].value
      );

      setValidation("");
      toggleModals("close");
      navigate("/private/profil");
    } catch {
      setValidation("Email ou Mot de passe incorrect");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
    navigate("/");
  };
  return (
    <>
      {modalState.signInModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="w-screen h-screen bg-black bg-opacity-50">
              <div
                className="absolute right-1/3 overlay"
                style={{ minWidth: "400px" }}
              >
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  <div
                    className="m-auto bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"
                    style={{ marginTop: 100 }}
                  >
                    <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t ">
                      <h3 className="text-3xl font=semibold">Sign in</h3>
                      <button
                        className="float-right text-black bg-transparent border-0"
                        onClick={() => closeModal()}
                      >
                        <span className="block w-6 h-6 py-0 text-xl text-black opacity-70">
                          x
                        </span>
                      </button>
                    </div>
                    <div className="relative flex-auto p-6">
                      <form
                        className="w-full px-8 pt-6 pb-8 bg-gray-200 rounded shadow-md"
                        ref={formRef}
                        onSubmit={handleForm}
                      >
                        <div>
                          <label className="block mt-3 mb-1 text-sm font-bold text-black">
                            Email Address
                          </label>

                          <input
                            ref={addInputs}
                            className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                            type="text"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="signUpPwd"
                            className="block mt-3 mb-1 text-sm font-bold text-black"
                          >
                            Password
                          </label>
                          <input
                            ref={addInputs}
                            className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                            type={mp ? "text" : "password"}
                            name="pwd"
                            autoComplete="on"
                            required
                          />
                          <img
                            onClick={togglePassword}
                            src={mp ? eye : eyeClose}
                            alt={
                              mp
                                ? "affiche le mot de passe"
                                : "cache le mot de passe"
                            }
                            style={{
                              position: "relative",
                              float: "right",
                              marginTop: "10px",
                              marginRight: "10px",
                              marginBottom: "0px",
                              marginLeft: "-30px",
                              width: "20px",
                              opacity: "0.6",
                            }}
                          />
                        </div>

                        <p className="mt-1 text-danger">{validation}</p>

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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignInModal;
