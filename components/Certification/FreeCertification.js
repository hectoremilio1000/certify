"use client";

import { useEffect, useState } from "react";

/**
 * Certificación gratuita comprimida + compartir
 */
export default function FreeCertification({ file, onBack }) {
  const [previewURL, setPreviewURL] = useState(null); // object-URL de la imagen final
  const [blob, setBlob] = useState(null); // blob para Web Share
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError(
        "Solo se admiten imágenes (JPG, PNG, WebP…) para la certificación gratuita."
      );
      return;
    }

    setLoading(true);

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
        logo.src = "/favicon.png";
        logo.onload = () => {
          const ratio = 0.18;
          const w = img.width * ratio;
          const h = (logo.height / logo.width) * w;
          const m = 24;
          ctx.globalAlpha = 0.82;
          ctx.drawImage(logo, img.width - w - m, img.height - h - m, w, h);

          /* canvas → blob (JPEG 80 %) */
          canvas.toBlob(
            (resultBlob) => {
              setBlob(resultBlob);
              setPreviewURL(URL.createObjectURL(resultBlob));
              setLoading(false);
            },
            "image/jpeg",
            0.8 // calidad
          );
        };
        logo.onerror = () => {
          console.error("No se pudo cargar /favicon.png");
          setError("No se encontró el watermark en /public/favicon.png");
          setLoading(false);
        };
      };
      img.src = target.result;
    };
    reader.readAsDataURL(file);

    /* cleanup */
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [file]);

  /* ----------- helpers ----------- */
  const handleShare = async () => {
    if (!blob) return;
    const shareFile = new File(
      [blob],
      `certified-${file.name.replace(/\.[^.]+$/, ".jpeg")}`,
      {
        type: "image/jpeg",
      }
    );

    if (navigator.canShare?.({ files: [shareFile] })) {
      try {
        await navigator.share({
          files: [shareFile],
          title: "Certify",
          text: "Imagen certificada con Certify",
        });
      } catch {
        /* usuario canceló */
      }
    } else {
      // Fallback: abrir la imagen en otra pestaña
      window.open(previewURL, "_blank", "noopener,noreferrer");
    }
  };

  /* ----------- UI ----------- */
  if (!file) return null;

  return (
    <div className="relative z-30 flex flex-col items-center gap-6 p-4">
      <button onClick={onBack} className="self-start text-primary underline">
        ← Volver
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {loading && !error && <p className="text-gray-600">Procesando imagen…</p>}

      {previewURL && !error && (
        <>
          <img
            src={previewURL}
            alt="Imagen certificada"
            className="max-w-full rounded shadow"
          />

          <div className="flex gap-4">
            <a
              href={previewURL}
              download={`certified-${file.name.replace(/\.[^.]+$/, ".jpeg")}`}
              className="bg-primary hover:bg-primaryLt text-white font-semibold px-6 py-3 rounded transition"
            >
              Guardar
            </a>

            <button
              onClick={handleShare}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded transition"
            >
              Enviar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
