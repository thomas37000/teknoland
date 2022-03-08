/* eslint-disable react-hooks/exhaustive-deps */
import { signInWithGoogle } from "../firebase/config";
import Upload from "../Upload";

function Home() {
  return (
    <div>
      <h1 className="my-10 text-3xl mt-15 m text-emerald-700">
        Teknoland Production
      </h1>
  
      <h2 className="my-10 text-3xl mt-15 m">{localStorage.getItem("name")}</h2>
      <div>{localStorage.getItem("email")}</div>
      <img src={localStorage.getItem("profilImage")} alt="profil user avatar" />

      <Upload />
    </div>
  );
}

export default Home;
