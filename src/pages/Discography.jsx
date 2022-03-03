import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import CardVinyl from "../components/Cards/CardVinyl";

const Discography = () => {
  const [vinyls, setVinyls] = useState([]);
  // console.log("data", vinyls);
  const [loading, setLoading] = useState(true);

  const vinylsCollectionRef = collection(db, "vinyls");
  const vinylQuery = query(vinylsCollectionRef, orderBy("reference", "asc"));

  // récupérer les données du Firestore avec snapshot
  function getCards() {
    onSnapshot(vinylQuery, (snapshot) => {
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
      <div className="flex flex-wrap justify-around mt-10">
        {vinyls &&
          vinyls.map((all, index) => <CardVinyl key={index} {...all} />)}{" "}
      </div>
    </div>
  );
};

export default Discography;
