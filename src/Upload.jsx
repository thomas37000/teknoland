import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { projectStorage } from "./firebase/config.js";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const selectedImg = e.target[0].files[0];
    console.log(selectedImg);

    if (selectedImg) {
      setFile(selectedImg);
      setError("");
    } else {
      setFile(null);
      setError("Please select an file file like png or jpg or svg or webp");
    }
    uploadFiles(selectedImg);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(projectStorage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        setError(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         // console.log("Chargement réussi !", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="file" className="btn btn-light ms-2 upload" />
        <button type="submit" className="btn btn-light ms-2">
          Upload
        </button>
      </form>
      <div>{error && <div className="error">{error}</div>}</div>

      <div className="container-img-upload">
        {file && <img src={url} alt={file.name} className="img-profil" />}
      </div>
    </>
  );
};

export default Upload;
