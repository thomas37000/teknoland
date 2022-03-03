import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import CardArtist from "../components/CardArtist";

const Artists = () => {
  const [artist, setArtist] = useState([]);
  console.log("data", artist);
  const [loading, setLoading] = useState(true);

  const usersCollectionRef = collection(db, "artists");
  const userQuery = query(usersCollectionRef, orderBy("artist_name", "asc"));

  // récupérer les données du Firestore avec snapshot
  function getCards() {
    onSnapshot(userQuery, (snapshot) => {
      setArtist(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data(),
          };
        })
      );
    });
  }

  useEffect(() => {
    getCards();
    setLoading(false);
  }, [loading]);

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div>
      {artist && artist.map((all, index) => <CardArtist key={index} {...all} />)}
    </div>
  );
};

export default Artists;
