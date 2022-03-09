import React, { useState } from "react";

const SignUpModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
     
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t ">
                  <h3 className="text-3xl font=semibold">Sign Up</h3>
                  <button
                    className="float-right text-black bg-transparent border-0"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 py-0 text-xl text-black bg-gray-400 rounded-full opacity-7">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <form className="w-full px-8 pt-6 pb-8 bg-gray-200 rounded shadow-md">
                    <label className="block mb-1 text-sm font-bold text-black">
                      Name
                    </label>

                    <input className="w-full px-1 py-2 text-black border rounded shadow appearance-none" />
                    <label className="block mt-3 mb-1 text-sm font-bold text-black">
                      Email Address
                    </label>

                    <input className="w-full px-1 py-2 text-black border rounded shadow appearance-none" />

                    <label
                      htmlFor="signUpPwd"
                      className="block mt-3 mb-1 text-sm font-bold text-black"
                    >
                      Create a password
                    </label>
                    <input
                      className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                      type="password"
                      name="pwd"
                      autoComplete="on"
                      required
                    />

                    <label
                      htmlFor="signUpPwd"
                      className="block mt-3 mb-1 text-sm font-bold text-black"
                    >
                      Repeat the password
                    </label>
                    <input
                      className="w-full px-1 py-2 text-black border rounded shadow appearance-none"
                      type="password"
                      name="pwd"
                      autoComplete="on"
                      required
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-yellow-700 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SignUpModal;
