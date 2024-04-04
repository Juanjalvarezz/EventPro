import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; 

const NavLinks = ({ categories, handleLogout, setCategories }) => {
  const handleClick = (category) => {
    setCategories(categories.map((cat) => (cat === category ? { ...cat, active: !cat.active } : cat)));
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
          className={`${category.active ? "text-red-500" : ""} hover:bg-primary-900 text-center hover:text-secondary-50 hover:shadow-lg hover:rounded-3xl p-5`}
          activeClassName="text-red-500" // Clase CSS aplicada al enlace activo
        >
          {category.name}
        </NavLink>
      ))}
    </>
  );
};


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            { name: "LogOut", to: "/", active: false }
          ];
        case "promotor":
          return [
            { name: "Home", to: "/promotor", active: false },
            { name: "Solicitud", to: "/solicitud", active: false },
            { name: "Perfil", to: "/profile", active: false },
            { name: "AboutUs", to: "/aboutUs", active: false },
            { name: "LogOut", to: "/", active: false }
          ];
        default: // Caso de usuario normal
          return [
            { name: "Home", to: "/dashboard", active: false },
            { name: "Eventos", to: "/eventos", active: false },
            { name: "Boletos", to: "/boletos", active: false },
            { name: "Perfil", to: "/profile", active: false },
            { name: "AboutUs", to: "/aboutUs", active: false },
            { name: "LogOut", to: "/", active: false }
          ];
      }
    } else {
      // Si el usuario no está autenticado, muestra las opciones de navegación para usuarios no autenticados
      return [
        { name: "Home" , to: "/", active: false },
        { name: "Login", to: "/login", active: false },
        { name: "Registro", to: "/register", active: false },
        { name: "AboutUs", to: "/loginAboutUs", active: false },
      ];
    }
  };

  const [categories, setCategories] = useState(getCategories());

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-end md:flex text-xl">
          <NavLinks categories={categories} handleLogout={logout} setCategories={setCategories} /> 
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
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
