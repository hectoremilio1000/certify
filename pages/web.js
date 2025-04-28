import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBarEs/NavBarEs";
import Link from "next/link";
import UploadDropzone from "../components/WebPage/UploadDropzone";

const web = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Certify | Web </title>
        <link rel="icon" href="../favicon.png" />
        <meta
          name="description"
          content="Certify Web es un servicio para certificar la publicación de un
          contenido en Internet indicando URL, fecha y hora."
        />
        <meta property="og:title" content="Certify Web" />
        <meta
          property="og:description"
          content="Certify Web es un servicio para certificar la publicación de un
          contenido en Internet indicando URL, fecha y hora."
        />
        <meta property="og:url" content="https://www.growthsuite.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/logo/logoSoloImpulsoRestaurantero.png"
        />
      </Head>

      <NavBar />

      <div className="w-full py-[70px] px-2 bg-black"></div>
      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Certifique cualquier contenido publicado en Internet
        </h1>
      </div>
      {/* detalles */}
      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="font-bold text-3xl">¿Qué es Certify Web?</h1>
        <p className="text-gray-800 font-medium mb-6 pt-4">
          Certify Web es un servicio para certificar la publicación de un
          contenido en Internet indicando URL, fecha y hora.
        </p>
        <p className="text-gray-800 font-medium mb-6">
          Sirve como una sólida prueba para casos de difamación, ciberacoso,
          publicación de obras con derechos de propiedad intelectual,
          incumplimiento de condiciones de venta, etc.
        </p>
        <UploadDropzone />
      </div>
      <div className="max-w-[1080px] mx-auto p-6">
        <h1 className="font-bold md:text-5xl text-3xl text-center">
          ¿Cómo funciona?
        </h1>
        <p className="text-gray-800 font-medium mb-6 pt-4">
          Depende del tipo de página y de la información cuya publicación se
          quiera certificar: <br />
          <b>
            Si es contenido estático (sin vídeo, audio, ni animaciones) en una
            página de acceso público.
          </b>
          Por ejemplo: el artículo de un periódico, o la página con los términos
          o condiciones de un producto. Seleccione la opción “Web Certificado de
          página” e introduzca la dirección de la página cuyo contenido quieras
          certificar.
        </p>
        <a
          className="text-primary font-bold 
        mb-4 block"
          href="/#"
        >
          Ver certificado de ejemplo
        </a>
        <p className="text-gray-800 font-medium mb-6 flex flex-col gap-3">
          Si es contenido audiovisual o se encuentra en páginas de una
          comunidad, red social, o en un área de acceso restringido a usuarios
          identificados. <br /> En este caso puede obtener un certificado que
          incluye: el vídeo completo de la sesión de navegación, las direcciones
          URL visitadas, y las capturas de pantalla que haya realizado durante
          la navegación. <br /> Seleccione la opción “Web {">"} Navegación
          certificada” e introduzca la dirección de inicio de la web, para
          recorrer desde allí las páginas que desee incluir en el vídeo de la
          certificación. <br /> Cuando se inicie el servidor de certificación
          web de Safe Stamper desde su navegador, guíelo a través de las
          distintas páginas mientras se realiza la grabación audiovisual,
          reproduciendo además todo el contenido que sea pertinente para que
          figure en ésta y realizando las capturas de pantalla que estime
          oportunas incluir en el certificado PDF.
        </p>
        <a
          className="text-primary font-bold 
        mb-4 block"
          href="/#"
        >
          Ver certificado de ejemplo
        </a>
      </div>
    </div>
  );
};

export default web;
