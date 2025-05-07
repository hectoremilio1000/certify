"use client";

export default function BlockchainCertification({ files, onBack }) {
  /* Aquí conectarías:
     1. Subida a tu backend / IPFS.
     2. Hash SHA-256 → smart-contract → txId.
     3. Devolver recibo/QR/tx link al usuario. */

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button onClick={onBack} className="self-start text-primary underline">
        ← Volver
      </button>
      <p className="text-gray-700">
        🚧 Implementa aquí la lógica de certificación en blockchain (hash +
        transacción). Recibes {files.length} archivo(s).
      </p>
    </div>
  );
}
