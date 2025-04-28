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
          <title>Certify | Desarrollo de Software a la Medida </title>
          <link rel="icon" href="../favicon.png" />
          <meta
            name="description"
            content="Expertos en desarrollo de software, apps móviles y soluciones POS."
          />
          <meta property="og:title" content="GrowthSuite" />
          <meta
            property="og:description"
            content="Expertos en desarrollo de software y POS para negocios."
          />
          <meta property="og:url" content="https://www.growthsuite.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/logo/logoSoloImpulsoRestaurantero.png"
          />
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
    </div>
  );
}
