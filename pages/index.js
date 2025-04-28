import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppContext } from "../components/context/Context";
import * as fbq from "../lib/fpixel"; // si usas Facebook Pixel
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";

// Componentes que ya tienes
import NavBar from "../components/NavBarEs/NavBarEs";
import CasosEstudio from "../components/CasosEstudio";
import CasosExitosos from "../components/CasosExitosos";

import About from "../components/About";

import WhatsappButton from "../components/WhatsappButton";

// Importa estilos

import { InlineWidget } from "react-calendly";
import { Button } from "antd";
import { FaMobileAlt, FaVideo } from "react-icons/fa";

// Carga perezosa (sin SSR) para el Swiper
const MySwiper = dynamic(() => import("../components/SwiperPrueba"), {
  ssr: false,
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { ingles, espa } = useAppContext();
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Abre/cierra modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Validar formulario
  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const whatsappRegex = /^[0-9]{10}$/;
    const fieldErrors = {};

    if (!data.first_name) {
      fieldErrors.first_name = "Por favor, ingresa tu nombre.";
    }
    if (!data.last_name) {
      fieldErrors.last_name = "Por favor, ingresa tu apellido.";
    }
    if (!emailRegex.test(data.email)) {
      fieldErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }
    if (!whatsappRegex.test(data.whatsapp)) {
      fieldErrors.whatsapp =
        "Por favor, ingresa un número de WhatsApp válido (10 dígitos).";
    }

    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  // Manejo del envío del form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage("");
    setAlertType("");
    setErrors({});

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!validateForm(data)) {
      setAlertMessage("Por favor, corrige los errores en el formulario.");
      setAlertType("error");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/prospectsmeeting`, data);
      if (response.status === 200) {
        alert("¡Información enviada!");
        e.target.reset();
        toggleModal();
      } else {
        alert("¡Información enviada!");
        e.target.reset();
        toggleModal();
      }
    } catch (error) {
      console.error(
        "Error al enviar el formulario:",
        error.response?.data || error.message
      );
      setAlertMessage(
        "Hubo un error al enviar tu información. Por favor, intenta de nuevo."
      );
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HEAD con meta tags */}
      {espa ? (
        <Head>
          <title>Certify | Certifica tu contenido </title>
          <link rel="icon" href="../favicon.png" />
          <meta name="description" content="Certifica tu contenido" />
          <meta property="og:title" content="GrowthSuite" />
          <meta property="og:description" content="Certifica tu contenido" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
        </Head>
      ) : (
        // Versión en inglés (opcional)
        <Head>
          <title>GrowthSuite | Custom Software Development</title>
          <link rel="icon" href="../favicon.png" />
          <meta
            name="description"
            content="We create custom software, mobile apps, and POS solutions for businesses."
          />
          <meta property="og:title" content="GrowthSuite" />
          <meta
            property="og:description"
            content="We develop software solutions for businesses worldwide."
          />
          <meta property="og:url" content="https://www.growthsuite.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/logo/logoSoloImpulsoRestaurantero.png"
          />
        </Head>
      )}

      <NavBar />

      <MySwiper />
      <div className="max-w-[1080px] mx-auto p-8 mt-[10vh]">
        <h1 className="text-5xl font-bold text-center">
          Evidencia digital a un clic
        </h1>
      </div>
      {/* detalles */}

      <div className="max-w-[1080px] mx-auto p-8">
        <p className="text-gray-800 font-medium mb-6">
          Convierte cualquier imagen en una prueba legalmente sólida. Con
          Certify blindas fecha, hora y ubicación sin complicaciones: elige si
          lo haces desde la web o con la cámara de tu móvil.
        </p>
      </div>
      {/* detalles */}
      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="font-bold text-3xl">Dos maneras de Certificar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <p className="w-full text-gray-800 font-medium mb-6">
            Certify Web
            <Link
              href="/web"
              className="w-full px-3 py-2 rounded-full flex gap-3 items-center text-primary border-2 border-primary"
            >
              <FaVideo />
              WEB
            </Link>
          </p>
          <p className="w-full text-gray-800 font-medium mb-6">
            Certify App
            <Link
              href="/app"
              className="w-full px-3 py-2 rounded-full flex gap-3 items-center text-primary border-2 border-primary"
            >
              <FaMobileAlt />
              App
            </Link>
          </p>
        </div>
      </div>
      {/* detalles */}
      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="font-bold text-3xl">¿Qué hace?</h1>
        <p className="text-gray-800 font-medium mb-6">
          Sube una foto o PDF desde tu navegador y en segundos recibes un PDF
          certificado con huella digital y sello de tiempo. Abre la app, toma la
          foto o video y obtén el certificado con geo-referencia incorporada.
        </p>
        <p className="text-gray-800 font-medium mb-6">
          Ideal para… Contratos firmados, inventarios, piezas creativas,
          entregas de servicio. Inspecciones en campo, siniestros, pruebas de
          cumplimiento, contenido periodístico. Resultado Documento PDF con
          hash, timestamp y firma electrónica de Certify. Idem, más coordenadas
          GPS y metadatos del dispositivo.
        </p>
        <img
          className="w-full object-cover h-[250px]"
          src="https://www.safestamper.com/public/img/photo-sign.jpg"
          alt=""
        />
      </div>
      {/* detalles */}
      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="font-bold text-3xl">¿Por qué elegir Certify?</h1>
        <p className="text-gray-800 font-medium mb-6">
          Valor probatorio en minutos: cumple con estándares de validez jurídica
          nacionales e internacionales. Integridad garantizada: usamos
          criptografía avanzada para sellar cada archivo. Privacidad primero:
          tus evidencias se guardan cifradas; sólo tú decides quién las ve.
          Listo para tribunales: nuestros certificados incluyen sello de tiempo
          confiable y firma electrónica reconocida.
        </p>
        <div className="max-w-[1080px] mx-auto p-8 mb-6">
          <p className="text-gray-800 text-center font-medium">Empieza Ahora</p>
          <h1 className="text-center text-2xl font-bold">
            Descargue la app para su dispositivo
          </h1>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="box flex justify-center">
              <div className="rounded bg-black text-white inline-block">
                <img
                  className="w-70"
                  src="https://www.safestamper.com/public/img/apps/es/android.png"
                  alt=""
                />
              </div>
            </div>
            <div className="box flex justify-center">
              <div className="rounded bg-black text-white inline-block">
                <img
                  className="w-70"
                  src="https://www.safestamper.com/public/img/apps/es/ios.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-800 font-medium mb-6">
          Con Certify proteges tu trabajo, tu reputación y tus derechos, sin
          importar dónde estés. ¡Certifica en línea o desde tu móvil y descansa
          tranquilo!
        </p>
      </div>
    </div>
  );
}
