import React from "react";
// import { Link } from "react-router-dom";

const CardArtist = ({
  image,
  artist_name,
  techno,
  vinyl,
  country,
  style,
  id,
}) => {
  return (
    <div className="max-w-xs overflow-hidden rounded shadow-lg">
      <div className="flex justify-center">
        <img src={image} alt={artist_name} />
      </div>

      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{artist_name}</div>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #
          {style.slice(0, 1).map((data, i) => (
            <div key={i}>{data}</div>
          ))}
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #{country}
        </span>
      </div>
      {/* <div>
        <Link
          to={`/artist/${id}`}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          <button>about</button>
        </Link>
      </div> */}
    </div>
  );
};

export default CardArtist;
