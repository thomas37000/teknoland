import React from "react";

const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto text-gray-600 bg-gray-100 rounded-lg shadow-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Contact
          </h2>
          <div className="mt-8 text-gray-900">
            Des questions concernant le label,
            <p>envoyez un message via le formulaire.</p>
          </div>
          <div className="mt-8 text-gray-900">
            <p>
              Vous souaitez être produit, envoyez vos démos à{" "}
              <span className="underline">teknolandproduction@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center"></div>
      </div>
      <div className="">
        <div>
          <span className="text-sm font-bold text-gray-600 uppercase">
            Name
          </span>
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=" "
          />
        </div>
        <div className="mt-8">
          <span className="text-sm font-bold text-gray-600 uppercase">
            Email
          </span>
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mt-8">
          <span className="text-sm font-bold text-gray-600 uppercase">
            Message
          </span>
          <textarea className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <button className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-green-800 rounded-lg focus:outline-none focus:shadow-outline">
            Validez
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
