import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import LoginHeader from "../components/LoginHeader";
import AnimatedPage from "../components/AnimatedPage";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isPromotor, setIsPromotor] = useState(false); // Nuevo estado para el botón de toggle

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las Contraseñas no coinciden");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/singup`, {
        name,
        email,
        password,
        role: isPromotor ? "promotor" : "user", // Envía el rol seleccionado
      });
      window.location.href = "/login";
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <>
    <AnimatedPage>
      <LoginHeader />

      <div className="flex justify-center items-center">
        <div
          className="max-w-md w-11/12 bg-gradient-to-r from-complement-800 to-primary-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 "
          style={{ animation: "slideInFromLeft 1s ease-out" }}
        >
          <h2
            className="text-center text-4xl font-extrabold text-secondary-50"
            style={{ animation: "appear 2s ease-out" }}
          >
            Registro
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                placeholder="Nombre y Apellido"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer h-10 w-full border-b-2 border-secondary-300 text-secondary-50 bg-transparent placeholder-transparent focus:outline-none focus:border-primary-500"
              />
              <label className="absolute left-0 -top-3.5 text-secondary-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-500 peer-focus:text-sm">
                Nombre y Apellido
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-secondary-300 text-secondary-50 bg-transparent placeholder-transparent focus:outline-none focus:border-primary-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="absolute left-0 -top-3.5 text-secondary-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-500 peer-focus:text-sm">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer h-10 w-full border-b-2 border-secondary-300 text-secondary-50 bg-transparent placeholder-transparent focus:outline-none focus:border-primary-500"
              />
              <label className="absolute left-0 -top-3.5 text-secondary-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-500 peer-focus:text-sm">
                Contraseña
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="Confirmar Contraseña"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="peer h-10 w-full border-b-2 border-secondary-300 text-secondary-50 bg-transparent placeholder-transparent focus:outline-none focus:border-primary-500"
              />
              <label className="absolute left-0 -top-3.5 text-secondary-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-500 peer-focus:text-sm">
                Comfirmar Contraseña
              </label>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
              className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-700 rounded-md shadow-lg text-secondary-50 font-semibold transition duration-200"
              type="submit"
            >
              Registrarse
            </button>
          </form>
          <div className="text-center ring-offset-background focus:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-8 border-0 rounded-full text-sm font-medium text-secondary-50 bg-gradient-to-l from-complement-400 to-primary-400 shadow-lg hover:from-primary-400 hover:to-blue-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <label htmlFor="toggle" className="">
              Quieres ser un promotor y promocinar eventos? Haz click Aqui
            </label>
            <input
              type="checkbox"
              id="toggle"
              checked={isPromotor}
              onChange={() => setIsPromotor(!isPromotor)}
            />
          </div>

          <div className="text-center text-secondary-300">
            Ya tienes una cuenta?{" "}
            <a
              className="text-primary-300 hover:underline cursor-pointer"
              onClick={redirectToLogin}
            >
              Inicia Sesión
            </a>
          </div>
        </div>
      </div>

      <Footer />
      </AnimatedPage>
    </>
  );
};

export default Register;
