/* eslint-disable react-hooks/exhaustive-deps */
import SignInModal from "../components/Modals/SignInModal";
import SignUpModal from "../components/Modals/SignUpModal";
import Upload from "../Upload";

function Home() {
  return (
    <div>
      <h1 className="my-10 text-3xl mt-15 m text-emerald-700">
        Teknoland Production
      </h1>
      <SignUpModal />
      <SignInModal />
      <Upload />
    </div>
  );
}

export default Home;
