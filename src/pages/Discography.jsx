import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import Card from "../components/CardArtist";
import CardVinyl from "../components/CardVinyl";

const Discography = () => {
  const [vinyls, setVinyls] = useState([]);
  console.log("data", vinyls);
  const [loading, setLoading] = useState(true);

  const usersCollectionRef = collection(db, "vinyls");
  const userQuery = query(usersCollectionRef, orderBy("vinyl_name", "asc"));

  // récupérer les données du Firestore avec snapshot
  function getCards() {
    onSnapshot(userQuery, (snapshot) => {
      setVinyls(
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
      <h3>all the vinyls from Teknoland Production</h3>
      {vinyls && vinyls.map((all, index) => <CardVinyl key={index} {...all} />)}
    </div>
  );
};

export default Discography;
