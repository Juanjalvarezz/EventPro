import React from 'react';

export default function App() {
  return (
    <footer
    className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
    <div className="container p-6 text-neutral-800 dark:text-neutral-200">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="mb-6 md:mb-0">

            <img src={Logo} alt="Logo" className="w-48 animate-pulse mr-4" />

        </div>

        <div className="mb-6 md:mb-0">
        <div className="flex flex-wrap items-center">

          {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 mr-2 mb-2 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300" // Reducido el padding
              >
                {link.icon}
              </a>
            ))}

        </div>
        </div>
      </div>
    </div>

    

    {/* <!--Copyright section--> */}
    <div
      className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      © 2023 Copyright:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://tw-elements.com/"
      >TW Elements</a>
    </div>
  </footer>
  );
}