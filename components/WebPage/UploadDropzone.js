"use client";

import { useState, useRef } from "react";
import FreeCertification from "../Certification/FreeCertification";
import BlockchainCertification from "../Certification/BlockchainCertification";
import NotaryCertification from "../Certification/NotaryCertification";

export default function UploadDropzone() {
  const [files, setFiles] = useState([]);
  const [mode, setMode] = useState(null); // "free" | "blockchain" | "notary"
  const inputRef = useRef(null);

  /* ---------- drag & drop ---------- */
  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles(dropped);
  };
  const handleDragOver = (e) => e.preventDefault();
  const handleFiles = (e) => setFiles(Array.from(e.target.files));
  const openDialog = () => inputRef.current.click();
  const reset = () => {
    setMode(null);
    setFiles([]);
  };

  /* ---------- paso 2: renderiza certificación ---------- */
  if (mode === "free")
    return <FreeCertification file={files[0]} onBack={reset} />;
  if (mode === "blockchain")
    return <BlockchainCertification files={files} onBack={reset} />;
  if (mode === "notary")
    return <NotaryCertification files={files} onBack={reset} />;

  /* ---------- paso 1: subir archivo ---------- */
  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* fondo sutil */}
      <img
        className="absolute inset-0 object-cover opacity-10 z-10 w-full h-full pointer-events-none"
        src="https://www.safestamper.com/public/img/photo-notify.jpg"
        alt=""
      />

      {/* zona drop */}
      <div
        className="relative z-20 w-full max-w-md p-8 bg-primary border-2 border-dashed border-white rounded-lg text-center cursor-pointer hover:bg-primary transition"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={openDialog}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFiles}
        />

        <div className="flex flex-col items-center">
          <div className="text-white text-4xl mb-4">⬆️</div>
          <p className="text-white font-semibold">
            Arrastra y suelta para subir archivos
          </p>
          <p className="text-white">o</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openDialog();
            }}
            className="mt-4 bg-white text-primary font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            Buscar archivos
          </button>
        </div>
      </div>

      {/* opciones de certificación */}
      {files.length > 0 && (
        <div className="mt-6 w-full max-w-md space-y-4">
          <h3 className="text-lg font-bold text-gray-700">
            Elegir certificación
          </h3>

          <button
            className="w-full py-3 rounded-md font-semibold bg-primary   text-white hover:bg-primaryLt  transition"
            onClick={() => setMode("free")}
          >
            Certificar Gratis
          </button>
          <button
            className="w-full py-3 rounded-md font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition"
            onClick={() => setMode("blockchain")}
          >
            Certificar con Blockchain
          </button>
          <button
            className="w-full py-3 rounded-md font-semibold bg-amber-600  text-white hover:bg-amber-500  transition"
            onClick={() => setMode("notary")}
          >
            Certificar con Notario Digital
          </button>
        </div>
      )}
    </div>
  );
}
