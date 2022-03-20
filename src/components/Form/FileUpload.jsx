import React, { useRef } from "react";

const FileUploader = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0]);
  };

//   onChange={(e) =>
//     setForm({ ...form, image_vinyl: e.target.files[0] })
//   }

  return (
    <div className="file-uploader">
      <input
        type="file"
        onChange={handleFileInput}
        className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  );
};

export default FileUploader;
