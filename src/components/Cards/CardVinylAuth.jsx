import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

const CardVinylAuth = ({
  artists,
  image_vinyl,
  style,
  vinyl_name,
  reference,
  vinyl,
  id,
}) => {
  // ---------------------------------------------------------------------------
  // VINYL DELETED OK, BUT HAVE THIS ERROR MESSAGE WHEN ONCLICK
  // index.esm2017.js:15823 Uncaught (in promise)
  // TypeError: Cannot use 'in' operator to search for '_delegate' in undefined
  // ---------------------------------------------------------------------------
  const deleteVinyl = async (id) => {
    const vinylDoc = doc(db, "vinyls", id);
    await deleteDoc(vinylDoc)
      .then(() => console.log("vinyl deleted !"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="max-w-xs overflow-hidden rounded shadow-lg bg-zinc-200">
      <img className="w-full" src={image_vinyl} alt={vinyl_name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{vinyl_name}</div>
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-green-800">{artists}</div>
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-lg font-bold text-green-600">{reference}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full">
          {style.slice(0, 1).map((data, i) => (
            <div key={i}>{data}</div>
          ))}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full">
          {style.slice(1, 2).map((data, i) => (
            <div key={i}>{data}</div>
          ))}
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <button
            onClick={() => deleteVinyl(id)}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded"
          >
            Delete
          </button>
        </div>
        <div>
          <button
             // onClick={() => update(id)}
            className="px-4 py-2 font-bold text-white bg-green-500 rounded"
          >
            Edit
          </button>
        </div>
        <div>
          <Link to={`/vinyl/${id}`}>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              infos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardVinylAuth;
