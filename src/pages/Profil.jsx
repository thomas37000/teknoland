import React, { useState } from "react";
import FormVinyl from "../components/Form/FormVinyl";

const Profil = () => {
  const [form, setForm] = useState({
    artist: "",
    image_vinyl: "",
    style: [],
    vinyl_name: "",
    reference: "",
    titles: [
      {
        title: "",
        title2: "",
        title3: "",
        title4: "",
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({
      artist: "",
      image_vinyl: "",
      style: [],
      vinyl_name: "",
      reference: "",
      titles: [
        {
          title: "",
          title2: "",
          title3: "",
          title4: "",
        },
      ],
    });
  };

  return (
    <div>
      <FormVinyl />
    </div>
  );
};

export default Profil;
