import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const FormVinyl = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const [form, setForm] = useState({
    artists: [],
    image_vinyl: "",
    reference: "",
    style: [],
    titles: [],
    vinyl_name: "",
  });

  // ---------------------------------------------------------------------------
  // onSubmit Form
  // ---------------------------------------------------------------------------
  const vinylsCollectionRef = collection(db, "vinyls");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(vinylsCollectionRef, form);

    setForm({
      artists: [],
      image_vinyl: "",
      reference: "",
      style: [],
      titles: [],
      vinyl_name: "",
    });
  };

  // ---------------------------------------------------------------------------
  // ADD TITLES
  // ---------------------------------------------------------------------------
  const handleTitles = (e, i) => {
    const addNewTitle = [...form.titles];
    addNewTitle[i] = e.target.value;

    setForm({
      ...form,
      titles: addNewTitle,
    });
  };

  // ---------------------------------------------------------------------------
  // new title input onClick
  // ---------------------------------------------------------------------------
  const handleTitlesCount = () => {
    setForm({
      ...form,
      titles: [...form.titles, ""],
    });
  };

  // ---------------------------------------------------------------------------
  // ADD ARTISTS
  // ---------------------------------------------------------------------------
  const handleArtists = (e, i) => {
    const addNewArtist = [...form.artists];
    addNewArtist[i] = e.target.value;

    setForm({
      ...form,
      artists: addNewArtist,
    });
  };

  // ---------------------------------------------------------------------------
  // new artist input onClick
  // ---------------------------------------------------------------------------
  const handleArtistCount = () => {
    setForm({
      ...form,
      artists: [...form.artists, ""],
    });
  };

  /// ---------------------------------------------------------------------------
  // ADD STYLES
  // ---------------------------------------------------------------------------
  const handleStyles = (e, i) => {
    const addNewStyle = [...form.style];
    addNewStyle[i] = e.target.value;

    setForm({
      ...form,
      style: addNewStyle,
    });
  };

  // ---------------------------------------------------------------------------
  // new style input onClick
  // ---------------------------------------------------------------------------
  const handleStylesCount = () => {
    setForm({
      ...form,
      style: [...form.style, ""],
    });
  };

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
              htmlFor="vinyle_name"
            >
              vinyl_name <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="vinyl_name"
              type="text"
              value={form.vinyl_name}
              placeholder="Techno for ever"
              onChange={(e) => setForm({ ...form, vinyl_name: e.target.value })}
              required
            />
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="artist"
            >
              reference <span className="text-red-400">*</span>
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="reference"
              type="text"
              value={form.reference}
              placeholder="Teknoland 03"
              onChange={(e) => setForm({ ...form, reference: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="title"
            >
              artists <span className="text-red-400">*</span>
            </label>

            {form.artists.map((artist, i) => (
              <input
                className="block w-full px-4 py-3 mt-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="artist"
                type="text"
                value={artist}
                placeholder="Primitik"
                onChange={(e) => handleArtists(e, i)}
                key={i}
                required
              />
            ))}
            <button
              type="button"
              onClick={handleArtistCount}
              className="px-4 py-2 mt-3 font-bold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
            >
              Add Artist
            </button>
          </div>
        </div>

        <div className="w-full px-3 md:w-1/2">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
            htmlFor="grid-state"
          >
            Techno(s) style(s) <span className="text-red-400">*</span>
          </label>

          {form.style.map((style, i) => (
            <input
              className="block w-full px-4 py-3 mt-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="style"
              type="text"
              value={style}
              placeholder="Hardtek"
              onChange={(e) => handleStyles(e, i)}
              key={i}
              required
            />
          ))}
          <button
            type="button"
            onClick={handleStylesCount}
            className="px-4 py-2 mt-3 font-bold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
          >
            Add Style
          </button>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="title"
            >
              titles <span className="text-red-400">*</span>
            </label>

            {form.titles.map((title, i) => (
              <input
                className="block w-full px-4 py-3 mt-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="title"
                type="text"
                value={title}
                placeholder="Raves"
                onChange={(e) => handleTitles(e, i)}
                key={i}
                required
              />
            ))}
            <button
              type="button"
              onClick={handleTitlesCount}
              className="px-4 py-2 mt-3 font-bold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
            >
              Add title
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-6">
          <div className="mb-3 w-96">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="artist"
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
              accept="image/*"
              id="formFile"
              value={form.image_vinyl}
              onChange={(e) =>
                setForm({ ...form, image_vinyl: e.target.value })
              }
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
