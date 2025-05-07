// components/NavBarEs/NavBarEs.js
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../data/imagenes/logo.png";

// Icons
import { FaAlignRight, FaMobileAlt, FaVideo, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context/Context";

// Flags (por si los sigues usando posteriormente)
const usFlag =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/banderas/um.svg";
const mxFlag =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/banderas/mx.svg";

function NavBar() {
  const [linkswraper, setLinkswraper] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();

  // Cambia bg cuando se hace scroll
  const changeBackground = () => {
    if (typeof window !== "undefined") {
      setNavbar(window.scrollY >= 80);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  const router = useRouter();

  return (
    <header className={navbar ? "header-container sticky" : "header-container"}>
      <div className="max-w-[1184px] w-full mx-auto px-4 md:px-6 py-4 md:mt-2 mt-6 flex items-center justify-between flex-wrap font-sans">
        {/* ---------- LOGO + TOGGLE ---------- */}
        <div className="header-logo flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Certify logo"
              priority
              className="w-20 md:w-36 lg:w-40 h-auto"
            />
          </Link>
          <FaAlignRight
            className="toggle-icon cursor-pointer text-white text-2xl md:hidden"
            onClick={() => setLinkswraper(!linkswraper)}
          />
        </div>

        {/* ---------- LINKS ---------- */}
        <ul
          onClick={() => setLinkswraper(false)}
          className={`linkswraper ${linkswraper ? "active bg-darkHero" : ""}`}
        >
          {espa ? (
            <>
              {/* WEB */}
              <li>
                <Link
                  href="/web"
                  className="px-3 py-2 rounded-full flex items-center justify-center gap-0 md:gap-3 text-primary md:text-white md:border-2 md:border-white hover:bg-primary/10 md:hover:bg-white/10"
                >
                  <FaVideo className="hidden md:block" />
                  <span className="font-bold md:font-normal">WEB</span>
                </Link>
              </li>

              {/* APP */}
              <li>
                <Link
                  href="/app"
                  className="px-3 py-2 rounded-full flex items-center justify-center gap-0 md:gap-3 text-primary md:text-white md:border-2 md:border-white hover:bg-primary/10 md:hover:bg-white/10"
                >
                  <FaMobileAlt className="hidden md:block" />
                  <span className="font-bold md:font-normal">APP</span>
                </Link>
              </li>

              {/* LOGIN */}
              <li>
                <Link
                  href="/login"
                  className="px-3 py-2 rounded-full flex items-center justify-center gap-0 md:gap-3 text-primary font-bold md:text-white md:font-normal md:bg-primary md:border-white hover:bg-primaryLt/80"
                >
                  <FaUser className="hidden md:block" />
                  <span className="font-bold md:font-normal">LOGIN</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Aquí tu versión en inglés o lo que necesites */}
              <li>
                <Link
                  href="/pricing"
                  className="px-3 py-2 nav-link text-primary hover:text-primaryLt"
                >
                  PRICING
                </Link>
              </li>
              <li>
                <Link
                  href="/fast-certification"
                  className="px-3 py-2 rounded-full bg-cta text-darkHero font-bold hover:bg-cta/80"
                >
                  FAST CERTIFICATION
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="px-3 py-2 nav-link text-primary hover:text-primaryLt"
                >
                  SIGN IN
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
