import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBarEs/NavBarEs";
import Link from "next/link";

const app = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Certify | App </title>
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

      <div className="w-full py-[70px] px-2 bg-darkHero"></div>
      <div className="relative max-w-[1080px] mx-auto p-8">
        <img
          className="absolute bottom-0 object-cover opacity-10 z-10 w-full h-full top-0 left-0 right-0"
          src="https://www.safestamper.com/public/img/photo-photo.jpg"
          alt=""
        />
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Certifique fotografías y grabaciones geolocalizadas
        </h1>
        <p className="md:text-5xl text-3xl font-normal text-center">
          desde su dispositivo móvil
        </p>
      </div>
      {/* detalles */}
      <div className="max-w-[1080px] mx-auto p-8">
        <h1 className="font-bold md:text-5xl text-3xl">¿Qué es Certify App?</h1>
        <p className="text-gray-800 font-medium mb-6">
          Una vez registrado como usuario de Safe Stamper, descargue e instale
          la aplicación de Safe Stamper en el dispositivo móvil que hará las
          fotografías, vídeos o audios.
          <br />
          <br />
          Al pie de la página se encuentran los enlaces para descargarla e
          instalarla desde Google Play, si su dispositivo funciona con Android,
          o desde la App Store si lo hace con iOS.
          <br />
          <br />
          Al hacer fotografías o grabaciones desde la app obtendrá como
          evidencia de lo que ha fotografiado o grabado y de la fecha, hora y
          lugar un documento de certificación que incluye:
        </p>
        <ul
          style={{
            listStyle: "inherit !important",
            paddingLeft: "10px !important",
          }}
        >
          <li>
            Una copia de la fotografía tomada o información de la grabación
            (duración, tamaño del fichero y huellas digitales).
          </li>
          <li>
            Las coordenadas del sistema de geoposicionamiento del dispositivo
            móvil.
          </li>
          <li>
            La firma electrónica de Safe Stamper con el correspondiente sellado
            de tiempo, como prueba de la integridad del certificado y de la
            fecha y hora de la certificación.
          </li>
        </ul>
        <a
          className="text-primary font-bold 
        mb-4 block"
          href="/#"
        >
          Ver certificado de ejemplo
        </a>
      </div>

      <div className="max-w-[1080px] mx-auto p-8 mb-6">
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
      <div className="max-w-[1080px] mx-auto p-8">
        <p className="text-gray-800 font-medium mb-6">
          <b>IMPORTANTE:</b> Para el uso de la app de certificación de imágenes
          y grabaciones audiovisuales geolocalizadas es necesaria una cuenta de
          usuario. Este tipo de certificación no es posible a través de la
          certificación exprés.
        </p>
      </div>
    </div>
  );
};

export default app;
