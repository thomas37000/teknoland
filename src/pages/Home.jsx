/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import Upload from "../Upload";
import Card from "../components/Card";

function Home() {
  const [artist, setArtist] = useState([]);
  console.log("data", artist);

  const usersCollectionRef = collection(db, "artists");
  const userQuery = query(usersCollectionRef, orderBy("artists_name", "asc"));

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
  }, []);

  return (
    <div>
      <h1 className="my-10 text-3xl mt-15 m text-emerald-700">
        Teknoland Production
      </h1>
      <Upload />
      {artist &&
        artist.map((all, index) => {
          <Card key={index} {...all} />;
        })}
    </div>
  );
}

export default Home;
