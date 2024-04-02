import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; 

const NavLinks = ({ categories, handleLogout }) => { 
  const handleClick = (category) => {
    setCategories(categories.map((cat) => (cat === category ? !cat : cat)));
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
        >
          {category.name}
        </NavLink>
      ))}
    </>
  );
};

const PromotorNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth(); 

  const [categories, setCategories] = useState([
    { name: "Home", to: "/promotor", active: false },
    { name: "Solicitud", to: "/solicitud", active: false },
    { name: "Perfil", to: "/promoProfile", active: false },
    { name: "AboutUs", to: "/promoAboutUs", active: false },
    { name: "LogOut", to: "/", active: false },
  ]);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  const handleClick = (category) => {
    setCategories(categories.map((cat) => (cat === category ? { ...cat, active: !cat.active } : cat)));
  };

  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-end md:flex text-xl">
          <NavLinks categories={categories} handleLogout={logout} /> 
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

export default PromotorNav;