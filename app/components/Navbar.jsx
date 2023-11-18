"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const Navbar = ({ language, setLanguage }) => {
  const navLinks = [
    {
      title: "About",
      titulo: "Sobre mí",
      path: "#about",
    },
    {
      title: "Projects",
      titulo: "Proyectos",
      path: "#projects",
    },
    {
      title: "Contact",
      titulo: "Contacto",
      path: "#contact",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    language === "spa" ? setLanguage("en") : setLanguage("spa");
  };

  return (
    <nav className="fixed mx-auto border border-t-transparent border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold "
        >
          gAg
        </Link>
        {/* <div className="flex justify-center items-center">
          <button className="h-10 w-10" onClick={handleClick}>
            {language === "en" ? (
              <img
                src="./images/united-states.png"
                alt="US"
                width={25}
                height={25}
              />
            ) : (
              <img
                src="./images/argentina.png"
                alt="argentina"
                width={25}
                height={25}
              />
            )}
          </button>
        </div> */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <button onClick={handleClick}>{
              language === 'en' ? (
                <img src="./images/united-states.png"
                alt="US"
                width={25}
                height={25}
                />
              ) : (<img src="./images/argentina.png"
              alt="argentina"
              width={25}
              height={25} />)
              }</button>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  titulo={link.titulo}
                  language={language}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} language={language} setLanguage={setLanguage} /> : null}
    </nav>
  );
};

export default Navbar;
