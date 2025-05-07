"use client";

export default function NotaryCertification({ files, onBack }) {
  /* Flujo sugerido:
     1. Subir archivos y datos de usuario a tu API.
     2. Iniciar firma electrónica o integración con proveedor notarial.
     3. Mostrar estado / paso a paso / recibo. */

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button onClick={onBack} className="self-start text-primary underline">
        ← Volver
      </button>
      <p className="text-gray-700">
        🚧 Aquí irá el proceso de certificación con notario digital. Recibes
        {files.length} archivo(s).
      </p>
    </div>
  );
}
