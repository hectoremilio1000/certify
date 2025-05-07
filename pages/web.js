// pages/web.js
import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBarEs/NavBarEs";
import Link from "next/link";
import UploadDropzone from "../components/WebPage/UploadDropzone";

const Web = () => {
  return (
    <div className="w-full font-sans">
      {/* ---------------------- META TAGS ---------------------- */}
      <Head>
        <title>Certify | Web</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Certify Web es un servicio para certificar la publicación de un contenido en Internet indicando URL, fecha y hora."
        />
        {/*  Open Graph  */}
        <meta property="og:title" content="Certify Web" />
        <meta
          property="og:description"
          content="Certify Web es un servicio para certificar la publicación de un contenido en Internet indicando URL, fecha y hora."
        />
        <meta
          property="og:url"
          content="https://certify-seven.vercel.app/web"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://certify-seven.vercel.app/og-certify.jpg"
        />
      </Head>

      {/* ---------------------- NAV ---------------------- */}
      <NavBar />

      {/* ---------------------- HERO OVERLAY ---------------------- */}
      <div className="w-full py-[70px] bg-darkHero" />

      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Certifique cualquier contenido publicado en Internet
        </h1>
      </div>

      {/* ---------------------- ¿QUÉ ES? ---------------------- */}
      <div className="max-w-[1080px] mx-auto p-8">
        <h2 className="font-bold text-3xl">¿Qué es Certify Web?</h2>
        <p className="text-textMain font-medium mb-6 pt-4">
          Certify Web es un servicio para certificar la publicación de un
          contenido en Internet indicando URL, fecha y hora.
        </p>
        <p className="text-textMain font-medium mb-6">
          Sirve como una sólida prueba para casos de difamación, ciberacoso,
          publicación de obras con derechos de propiedad intelectual,
          incumplimiento de condiciones de venta, etc.
        </p>
        <UploadDropzone />
      </div>

      {/* ---------------------- CÓMO FUNCIONA ---------------------- */}
      <div className="max-w-[1080px] mx-auto p-6">
        <h2 className="font-bold md:text-5xl text-3xl text-center mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-textMain font-medium mb-6">
          Depende del tipo de página y de la información cuya publicación se
          quiera certificar:
        </p>
        <p className="text-textMain font-medium mb-6">
          <b>
            Si es contenido estático (sin vídeo, audio, ni animaciones) en una
            página de acceso público.
          </b>
          &nbsp;Por ejemplo: el artículo de un periódico, o la página con los
          términos o condiciones de un producto. Seleccione la opción «Web →
          Certificado de página» e introduzca la dirección de la página cuyo
          contenido quiera certificar.
        </p>
        <Link
          href="#"
          className="text-primary font-bold mb-6 inline-block hover:text-primaryLt"
        >
          Ver certificado de ejemplo
        </Link>
        <p className="text-textMain font-medium mb-6 flex flex-col gap-3">
          Si es contenido audiovisual o se encuentra en páginas de una
          comunidad, red social, o en un área de acceso restringido a usuarios
          identificados.
          <br />
          En este caso puede obtener un certificado que incluye: el vídeo
          completo de la sesión de navegación, las direcciones URL visitadas, y
          las capturas de pantalla que haya realizado durante la navegación.
          <br />
          Seleccione la opción «Web → Navegación certificada» e introduzca la
          dirección de inicio de la web para recorrer desde allí las páginas que
          desee incluir en el vídeo de la certificación.
          <br />
          Cuando se inicie el servidor de certificación web de Safe Stamper
          desde su navegador, guíelo a través de las distintas páginas mientras
          se realiza la grabación audiovisual, reproduciendo además todo el
          contenido que sea pertinente para que figure en ésta y realizando las
          capturas de pantalla que estime oportunas incluir en el certificado
          PDF.
        </p>
        <Link
          href="#"
          className="text-primary font-bold inline-block hover:text-primaryLt"
        >
          Ver certificado de ejemplo
        </Link>
      </div>
    </div>
  );
};

export default Web;
