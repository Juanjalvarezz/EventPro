import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = ({ categories }) => {
  const handleClick = (category) => {
    setCategories(categories.map((cat) => (cat === category ? !cat : cat)));
  };

  return (
    <>
      {categories.map((category, index) => (
        <NavLink
        key={index}
        to={category.to}
        onClick={() => handleClick(category)}
        className={`${category.active ? "text-red-500" : ""} hover:bg-purple-900 text-center hover:text-white hover:shadow-lg hover:rounded-3xl p-5`}
      >
        {category.name}
      </NavLink>
      ))}
    </>
  );
};

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([
    { name: "Home" , to: "/adminDashboard", active: false },
    { name: "Usuarios", to: "/adminUsers", active: false },
    { name: "Pagina1", to: "/adminDashboard", active: false },
    { name: "Pagina2", to: "/adminDashboard", active: false },
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
          <NavLinks categories={categories} />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex basis-full ml-10 flex-col items-center text-center space-y-4">
          <NavLinks categories={categories} />
        </div>
      )}
    </>
  );
};

export default AdminNav;