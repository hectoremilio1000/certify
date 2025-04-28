import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../data/imagenes/logo.png";

// css navbar

// icons react
import {
  FaAlignRight,
  FaMicrophoneAlt,
  FaMobileAlt,
  FaVideo,
} from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./navbar.module.css";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/Context";

const usFlag =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/banderas/um.svg";

const mxFlag =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/banderas/mx.svg";

function NavBar() {
  const [current, setCurrent] = useState("");
  const [linkswraper, setLinkswraper] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { espa, ingles, onIdiomaIngles, onIdiomaEspa } = useAppContext();

  // console.log(espa, ingles);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", changeBackground);
  }
  const navigate = useRouter();

  const handleNavbar = () => {
    setLinkswraper(!linkswraper);
  };

  const cambiarComponent = (e) => {
    setCurrent(e.key);
    navigate.push(`${e.key}`);
  };

  return (
    <div className={navbar ? "header-container sticky" : "header-container"}>
      <div className="max-w-[1184px] flex items-center justify-between flex-wrap w-full mx-auto py-4 mt-2  px-4 md:px-6">
        {/* <Link href="/">
        <Image src={logo} width={100}
          alt="llorona" priority />

      </Link> */}
        <div className="header-logo">
          <div>
            <Link href="/" className="logo ">
              <Image
                src={logo}
                width={150}
                alt="Impulso Restaurantero"
                priority
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <FaAlignRight
              className="toggle-icon mr-2"
              onClick={() => {
                handleNavbar();
              }}
            />
          </div>
        </div>
        <div
          onClick={() => {
            handleNavbar();
          }}
          className={linkswraper ? "linkswraper active" : "linkswraper"}
        >
          <>
            {" "}
            {espa ? (
              <>
                <li key="0">
                  <Link
                    href="/web"
                    className="px-3 py-2 rounded-full flex gap-3 items-center text-white border-2 border-white"
                  >
                    <FaVideo />
                    WEB
                  </Link>
                </li>
                <li key="1">
                  <Link
                    href="/app"
                    className="px-3 py-2 rounded-full flex gap-3 items-center text-white border-2 border-white"
                  >
                    <FaMobileAlt />
                    App
                  </Link>
                </li>
                {/* <li key="2">
                  <Link
                    href="/precios"
                    className="nav-link hover:text-yellow-400"
                  >
                    PRECIOS
                  </Link>
                </li> */}
                {/* <li key="1">
                  <Link
                    href="/certificacion"
                    className="px-3 py-2 text-nowrap rounded-full text-white bg-primary font-bold"
                  >
                    CERTIFICACIÓN EXPRESS
                  </Link>
                </li> */}

                <li key="4">
                  <Link
                    href="/login"
                    className="px-3 py-2 text-nowrap rounded-full text-gray-900 bg-gray-300 font-bold"
                  >
                    ALTA O INICIA SESIÓN
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li key="0">
                  <Link
                    href="/precios"
                    className="nav-link hover:text-yellow-400"
                  >
                    PRECIOS
                  </Link>
                </li>
                <li key="1">
                  <Link
                    href="/certificacion"
                    className="px-3 py-2 rounded-full text-white bg-primary"
                  >
                    CERTIFICACIÓN EXPRESS
                  </Link>
                </li>

                <li key="4">
                  <Link
                    href="/login"
                    className="nav-link hover:text-yellow-400"
                  >
                    ALTA O INICIA SESIÓN
                  </Link>
                </li>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
