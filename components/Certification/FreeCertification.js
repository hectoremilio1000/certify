"use client";

import { useEffect, useState } from "react";

/**
 * Certificación gratuita:
 * 1. Solo acepta imágenes (JPG/PNG/WebP).
 * 2. Añade watermark desde /public/favicon.png.
 * 3. Permite descargar PNG final.
 */
export default function FreeCertification({ file, onBack }) {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!file) return;

    /* ----------- tipo de archivo ----------- */
    if (!file.type.startsWith("image/")) {
      setError(
        "Solo se admiten imágenes (JPG, PNG, WebP…) para la certificación gratuita."
      );
      return;
    }

    /* ----------- File → DataURL ----------- */
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      const img = new Image();
      img.onload = () => {
        /* canvas base */
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        /* watermark */
        const logo = new Image();
        logo.src = "/favicon.png"; // watermark
        logo.onload = () => {
          const ratio = 0.18; // 18 % del ancho
          const w = img.width * ratio;
          const h = (logo.height / logo.width) * w;
          const margin = 24;

          ctx.globalAlpha = 0.82; // transparencia
          ctx.drawImage(
            logo,
            img.width - w - margin,
            img.height - h - margin,
            w,
            h
          );

          setPreview(canvas.toDataURL("image/png"));
        };
        logo.onerror = () => {
          console.error("No se pudo cargar /favicon.png");
          setError("No se encontró el watermark en /public/favicon.png");
        };
      };
      img.src = target.result;
    };
    reader.readAsDataURL(file);
  }, [file]);

  /* ----------- UI ----------- */
  if (!file) return null;

  return (
    <div className="relative z-30 flex flex-col items-center gap-6 p-4">
      <button onClick={onBack} className="self-start text-primary underline">
        ← Volver
      </button>

      {error && <p className="text-red-600">{error}</p>}

      {!error && !preview && (
        <p className="text-gray-600">Procesando imagen…</p>
      )}

      {preview && (
        <>
          <img
            src={preview}
            alt="Imagen certificada"
            className="max-w-full rounded shadow"
          />
          <a
            href={preview}
            download={`certified-${file.name.replace(/\.[^.]+$/, ".png")}`}
            className="bg-primary hover:bg-primaryLt text-white font-semibold px-6 py-3 rounded transition"
          >
            Descargar PNG
          </a>
        </>
      )}
    </div>
  );
}
