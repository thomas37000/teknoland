/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, snapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/config";

const CardVinylById = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const { id } = useParams();
  const [vinyls, setVinyls] = useState({});
  console.log("data", vinyls);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const usersCollectionRef = collection(db, "vinyls");
  const userQuery = query(usersCollectionRef, orderBy("reference"));

  const { artist, image_vinyl, style, vinyl_name, reference } = vinyls;

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // ---------------------------------------------------------------------------
  useEffect(() => {
    db.child("vinyls").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setVinyls({
          ...snapshot.val(),
        });
      } else {
        snapshot({});
      }
    });
  }, [id]);

  // function getCards() {
  //   onSnapshot(userQuery, (snapshot) => {
  //     setVinyls(
  //       snapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           viewing: false,
  //           ...doc.data(),
  //         };
  //       })
  //     );
  //   });
  // }

  useEffect(() => {
    //  const dbRef = ref(db);

    db.child(`vinyls/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setVinyls({ ...snapshot.val() });
        } else {
          setVinyls([]);
        }
      });
  }, [id]);

  console.log(vinyls);

  // ---------------------------------------------------------------------------
  //
  // ---------------------------------------------------------------------------
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="max-w-xs overflow-hidden rounded shadow-lg">
      <img className="w-full" src={image_vinyl} alt={vinyl_name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{vinyl_name}</div>
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-green-800">{artist}</div>
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-lg font-bold text-green-600">{reference}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {/* {style.map((data, i) => (
            <div key={i}>{data}</div>
          ))} */}
        </span>
      </div>
    </div>
  );
};

export default CardVinylById;
