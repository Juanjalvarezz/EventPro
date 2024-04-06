import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const NavLinks = ({ categories, handleLogout, setCategories }) => {
  const handleClick = (category) => {
    setCategories(
      categories.map((cat) =>
        cat === category ? { ...cat, active: !cat.active } : cat
      )
    );
  };

  return (
    <>
      {categories.map((category, index) => (
        <NavLink
          key={index}
          to={category.to}
          onClick={() => {
            if (category.name === "LogOut") {
              handleLogout();
            } else {
              handleClick(category);
            }
          }}
          className={`${
            category.active ? "text-red-500" : ""
          } hover:bg-primary-700 text-center hover:text-secondary-50 text-secondary-100 hover:shadow-lg hover:rounded-3xl p-5`}
          activeclassname="text-red-500" // Clase CSS aplicada al enlace activo
        >
          {category.name}
        </NavLink>
      ))}
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : ""
  ); //Tema predeterminado
  const { logout, user, isAuthenticated } = useAuth(); // Obtiene el rol del usuario y el estado de autenticación desde el contexto de autenticación

  // Determina las categorías de navegación según el estado de autenticación y el rol del usuario
  const getCategories = () => {
    if (isAuthenticated) {
      switch (user.role) {
        case "admin":
          return [
            { name: "Home", to: "/dashboard", active: false },
            { name: "Solicitudes", to: "/solicitud", active: false },
            { name: "Boletos", to: "/boletos", active: false },
            { name: "Usuarios", to: "/adminUsers", active: false },
            { name: "LogOut", to: "/", active: false },
          ];
        case "promotor":
          return [
            { name: "Home", to: "/promotor", active: false },
            { name: "Solicitud", to: "/solicitud", active: false },
            { name: "Perfil", to: "/profile", active: false },
            { name: "AboutUs", to: "/aboutUs", active: false },
            { name: "LogOut", to: "/", active: false },
          ];
        default: // Caso de usuario normal
          return [
            { name: "Home", to: "/dashboard", active: false },
            { name: "Eventos", to: "/eventos", active: false },
            { name: "Boletos", to: "/boletos", active: false },
            { name: "Perfil", to: "/profile", active: false },
            { name: "AboutUs", to: "/aboutUs", active: false },
            { name: "LogOut", to: "/", active: false },
          ];
      }
    } else {
      // Si el usuario no está autenticado, muestra las opciones de navegación para usuarios no autenticados
      return [
        { name: "Home", to: "/", active: false },
        { name: "Login", to: "/login", active: false },
        { name: "Registro", to: "/register", active: false },
        { name: "AboutUs", to: "/aboutUs", active: false },
      ];
    }
  };

  const [categories, setCategories] = useState(getCategories());

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function toggleDarkMode() {
    setTheme(theme === "light" ? "dark" : "light");
    const root = document.querySelector("body"); // Puedes usar 'body' en lugar de 'html' si prefieres
    root.classList.toggle("dark-mode");
  }
  
  useEffect(() => {
    if (!localStorage.getItem("theme")) { // Si no hay tema almacenado
      setTheme("dark"); // Establecer tema oscuro por defecto
    }
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    }
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    }
  }, []);
  
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.querySelector("html")?.classList.remove("light");
    }
    if (theme === "light") {
      document.querySelector("html")?.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.querySelector("html")?.classList.add("light");
    }
  }, [theme]);
  

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <label className="inline-flex md:hidden mx-3 items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={toggleDarkMode}
            className="sr-only peer"
            checked={theme === "dark" ? true : false}
          />
          <div className="relative w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-900 dark:peer-focus:ring-primary-700 rounded-full peer dark:bg-secondary-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-secondary-50 after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-secondary-600 peer-checked:bg-secondary-600"></div>
        </label>
        <div className="hidden w-full justify-end md:flex text-xl">
          <label className="inline-flex mx-3 items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              className="sr-only peer"
              checked={theme === "dark" ? true : false}
            />
            <div className="relative w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-900 dark:peer-focus:ring-primary-700 rounded-full peer dark:bg-secondary-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-secondary-50 after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-secondary-600 peer-checked:bg-secondary-600"></div>
          </label>
          <NavLinks
            categories={categories}
            handleLogout={logout}
            setCategories={setCategories}
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex basis-full ml-10 flex-col items-center text-center space-y-4">
          <NavLinks categories={categories} handleLogout={logout} />
        </div>
      )}
    </>
  );
};

export default Nav;
