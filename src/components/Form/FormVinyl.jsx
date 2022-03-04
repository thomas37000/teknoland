import React from "react";

const FormVinyl = ({
  artist,
  image_vinyl,
  style,
  vinyl_name,
  reference,
  title,
  title2,
  title3,
  title4,
  handleSubmit,
}) => {
  return (
    <div className="flex justify-center mt-10">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-2 text-2xl font-bold text-green-700">
          Add a new vinyl
        </div>
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="vinyle_name"
            >
              vinyl_name <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="vinyl_name"
              type="text"
              value={vinyl_name}
              placeholder="Techno for ever"
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="artist"
            >
              reference <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="reference"
              type="text"
              value={reference}
              placeholder="Teknoland 03"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="artist"
            >
              Artist <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="artist"
              type="text"
              value={artist}
              placeholder="Primtik"
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="grid-state"
            >
              Techno(s) style(s) <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>{style}</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="title"
            >
              title 1 <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
              type="text"
              value={title}
              placeholder="Raves"
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="title 2"
            >
              title 2 <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="title2"
              type="text"
              value={title2}
              placeholder="23"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="title3"
            >
              title <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="title3"
              type="text"
              value={title3}
              placeholder="Teknival"
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="title4"
            >
              title 4 <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="title4"
              type="text"
              value={title4}
              placeholder="mix the underground"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div class="mb-3 w-96">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="artist"
            >
              image
            </label>
            <input
              className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFile"
              value={image_vinyl}
            />
          </div>
        </div>
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormVinyl;
