import React from "react";
import Logo from "../assets/img/Logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center dark:bg-neutral-900 lg:text-left md:flex md:justify-center md:items-center md:flex-row flex-col mt-8 pb-5">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="Logo" className="w-36 mr-4 animate-pulse" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-4">
        <p>&copy; 2024 EventPro. Todos los derechos reservados.</p>
        <div className="mt-4 text-center">
          <a href="#" className="text-white hover:text-blue-800 hover:underline mr-4">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-blue-800 hover:underline mr-4">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-blue-800 hover:underline">
            Instagram
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;