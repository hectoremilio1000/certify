"use client";

import { useState, useRef } from "react";

export default function UploadDropzone() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <div className="relative flex flex-col items-center justify-center  bg-gray-100 p-4">
      <img
        className="absolute bottom-0 object-cover opacity-10 z-10 w-full h-full top-0 left-0 right-0"
        src="https://www.safestamper.com/public/img/photo-notify.jpg"
        alt=""
      />
      <div
        className="relative z-20 w-full max-w-md p-8 bg-primary border-2 border-dashed border-white rounded-lg text-center cursor-pointer hover:bg-primary transition"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={openFileDialog}
      >
        <input
          type="file"
          multiple
          ref={inputRef}
          className="hidden"
          onChange={handleFiles}
        />
        <div className="flex flex-col items-center">
          <div className="text-white text-4xl mb-4">⬆️</div>
          <p className="text-white font-semibold">
            Arrastra y suelta para subir archivos
          </p>
          <p className="text-white">OR</p>
          <button
            type="button"
            className="mt-4 bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
            onClick={(e) => {
              e.stopPropagation();
              openFileDialog();
            }}
          >
            Buscar archivos
          </button>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          <h3 className="text-lg font-bold mb-2 text-gray-700">
            Archivos seleccionados:
          </h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
                <span className="text-gray-600">{file.name}</span>
                <span className="text-gray-400 text-sm">
                  {(file.size / 1024).toFixed(2)} KB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
