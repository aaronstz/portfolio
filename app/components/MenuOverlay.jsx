import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({
  links,
  language,
  setLanguage,
  navbarOpen,
  setNavbarOpen,
}) => {
  const handleClick = () => {
    language === "spa" ? setLanguage("en") : setLanguage("spa");
  };

  return (
    <ul className="flex flex-col py-4 items-center ">
      <button onClick={handleClick}>
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
      {links.map((link, index) => (
        <li key={index}>
          <button onClick={() => setNavbarOpen(false)}>

          <NavLink
            href={link.path}
            title={link.title}
            titulo={link.titulo}
            language={language}
          />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
