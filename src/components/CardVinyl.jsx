import React from "react";
// import { Link } from "react-router-dom";

const CardVinyl = ({ artist, image_vinyl, style,titles, vinyl_name, id }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img className="w-full" src={image_vinyl} alt={vinyl_name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{vinyl_name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #{style}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #{titles}
        </span>
      </div>
      {/* <div>
        <Link
          to={`/vinyl/${id}`}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          <button>about</button>
        </Link>
      </div> */}
    </div>
  );
};

export default CardVinyl;
