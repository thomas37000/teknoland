import React from 'react';
// import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';
import vinylPlaceholder from '../../vinyl.png';

const CardVinylAuth = ({
  artists,
  image_vinyl,
  style,
  vinyl_name,
  reference,
  id,
}) => {
  // ---------------------------------------------------------------------------
  // VINYL DELETED OK, BUT HAVE THIS ERROR MESSAGE WHEN ONCLICK
  // index.esm2017.js:15823 Uncaught (in promise)
  // TypeError: Cannot use 'in' operator to search for '_delegate' in undefined
  // ---------------------------------------------------------------------------
  const deleteVinyl = async (id) => {
    const vinylDoc = doc(db, 'vinyls', id);

    await deleteDoc(vinylDoc)
      .then(() => console.log('vinyl deleted !'))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='max-w-xs mb-4 overflow-hidden rounded shadow-lg bg-zinc-200'>
      {image_vinyl === '' ? (
        <img
          className='w-full'
          src={vinylPlaceholder}
          alt='vinyl par défault'
          style={{ width: 300, height: 300 }}
        />
      ) : (
        <img className='w-full' src={image_vinyl} alt={vinyl_name} />
      )}

      <div className='flex items-center justify-center mt-2'>
        Titre:
        <div className='ml-1 text-2xl font-bold'>{vinyl_name}</div>
      </div>

      <div className='flex items-center justify-center'>
        référence:
        <div className='ml-1 text-lg font-bold text-green-600'>{reference}</div>
      </div>

      <div className='px-6 py-4'>
        artiste(s):
        {Array.isArray(artists) ? (
          artists.map((data, i) => (
            <div
              key={i}
              className='font-bold text-green-800 text-l'
            >
              {data}
            </div>
          ))
        ) : (
          <div className='mb-2 text-xl font-bold text-green-800'>{artists}</div>
        )}
      </div>

      <div>styles:</div>
      <div className='py-2'>
        {style.map((data, i) => (
          <span
            key={i}
            className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full'
          >
            {data}
          </span>
        ))}
      </div>

      <div className='flex flex-wrap items-center justify-around'>
        <div>
          <button
            onClick={() => deleteVinyl(id)}
            className='px-4 py-2 font-bold text-white bg-red-500 rounded'
          >
            Delete
          </button>
        </div>

        {/* <div>
          <button
            // onClick={() => update(id)}
            className='px-4 py-2 font-bold text-white bg-green-500 rounded'
          >
            Edit
          </button>
        </div> */}

        {/* <div>
          <Link to={`/vinyl/${id}`}>
            <button className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
              infos
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CardVinylAuth;
