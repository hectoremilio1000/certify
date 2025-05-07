// pages/login.tsx
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../components/NavBarEs/NavBarEs";

export default function Login() {
  const router = useRouter();

  // estados locales
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || "Error al iniciar sesión");
      }

      // éxito → redirige al dashboard (ajusta la ruta si es distinta)
      router.replace("/dashboard");
    } catch (e) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <Head>
        <title>Certify | Iniciar sesión</title>
        <link rel="icon" href="../favicon.png" />
        <meta
          name="description"
          content="Accede a tu cuenta Certify para certificar fotos y contenido web."
        />
      </Head>

      {/* Barra de navegación */}
      <NavBar />

      {/* Hero / encabezado */}
      <header className="w-full bg-darkHero py-[70px] px-2"></header>
      <div>
        <h1 className="text-black text-center text-4xl font-bold pt-5">
          Inicia sesión en Certify
        </h1>
      </div>

      {/* Formulario */}
      <main className="flex-1 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-100 p-8 rounded-xl shadow-lg"
        >
          {error && (
            <p className="mb-4 text-red-600 text-center font-medium">{error}</p>
          )}

          <label className="block mb-4">
            <span className="block text-sm font-semibold mb-1">Correo</span>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block mb-6">
            <span className="block text-sm font-semibold mb-1">Contraseña</span>
            <input
              type="password"
              required
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>

          <p className="text-center text-sm mt-6">
            ¿No tienes cuenta?
            <a href="/signup" className="text-primary font-semibold ml-1">
              Regístrate
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
