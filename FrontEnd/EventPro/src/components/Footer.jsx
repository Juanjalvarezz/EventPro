import React from "react";

const logo = "Logo.png"

const Footer = () => {
  return (
    <footer className="bg-secondary-250 text-center text-secondary-900 dark:text-secondary-50 dark:bg-neutral-900 lg:text-left md:flex md:justify-center md:items-center md:flex-row flex-col mt-8 pb-5">
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-36 mr-4 animate-pulse" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4">
        <p>&copy; 2024 EventPro. Todos los derechos reservados.</p>
        <div className="mt-4 text-center">
          <a
            href="https://github.com/Juanjalvarezz/EventPro"
            className="text-secondary-700 dark:text-secondary-50 hover:text-blue-800 hover:underline mr-4"
          >
            Github
          </a>
          <a
            href="https://www.figma.com/file/rD3pF4scD8AgLvAX1CJQf6/EventPro?type=design&node-id=0%3A1&mode=design&t=sIuKTveTc8LrOCBH-1"
            className="text-secondary-700 dark:text-secondary-50 hover:text-blue-800 hover:underline mr-4"
          >
            Figma
          </a>
          <span className="relative group">
            <a className="text-secondary-700 dark:text-secondary-50 hover:text-blue-800 hover:underline hover:cursor-pointer">
              Contacto
            </a>
            <span className="absolute z-10 bg-primary-900 text-white text-md rounded-lg py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Eventpro@gmail.com
              <svg
                width="400"
                height="400"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="http://www.w3.org/1999/xlink"
              >
                <circle cx="100" cy="100" r="50" strokeWidth="5" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
