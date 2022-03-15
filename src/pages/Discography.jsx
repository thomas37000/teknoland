import { useState, useEffect, useContext } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import CardVinyl from "../components/Cards/CardVinyl";
import CardVinylAuth from "../components/Cards/CardVinylAuth";
import { UserContext } from "../context/UserContext";

const Discography = () => {
  // ---------------------------------------------------------------------------
  // STATES
  // ---------------------------------------------------------------------------
  const { currentUser } = useContext(UserContext);

  const [vinyls, setVinyls] = useState([]);
  const [loading, setLoading] = useState(true);

  const vinylsCollectionRef = collection(db, "vinyls");
  const vinylQuery = query(vinylsCollectionRef, orderBy("reference", "asc"));

  // ---------------------------------------------------------------------------
  // LIFE CYCLE
  // récupére les données du Firestore avec snapshot
  // ---------------------------------------------------------------------------
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
  }, []);

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div>
      <h3 className="mt-5 mb-2 text-xl font-bold text-green-800">
        the vinyls from Teknoland Production
      </h3>
      <div className="flex flex-wrap justify-around mt-10">
        {/* si User connecté il a accès au boutton delete sinon c'est la Card normal */}
        {currentUser === null
          ? vinyls &&
            vinyls.map((vinyl, index) => <CardVinyl key={index} {...vinyl} />)
          : vinyls &&
            vinyls.map((vinyl, index) => (
              <CardVinylAuth key={index} {...vinyl} deleteVinyl={vinyl} />
            ))}
      </div>
    </div>
  );
};

export default Discography;
