import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import LoginHeader from '../components/LoginHeader';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); 

    try {
      await login(email, password);
      const role = localStorage.getItem('role');
      if (role === 'user') {
        navigate("/dashboard")
      } else if (role === "admin") {
        navigate("/adminDashboard")
      } else if (role === "promotor") {
        navigate("/promotor")
      } else {
        setError("Email o contraseña Incorrecta")
      }
    } catch (error) {
      console.log(error);
      setError("Error al iniciar sesión");
    }
  };

  const redirectToRegister = () => {
    navigate('/register');
  };

  return (
    <>
        <LoginHeader />

        <div className="flex justify-center items-center">
          <div className="max-w-md w-11/12 bg-gradient-to-r from-complement-800 to-primary-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 md:w-4/5" style={{ animation: 'slideInFromLeft 1s ease-out' }}>
            <h2 className="text-center text-4xl font-extrabold text-secondary-50 -mb-5" style={{ animation: 'appear 2s ease-out' }}>
              Bienvenido
            </h2>
            <p className="text-center text-secondary-200" style={{ animation: 'appear 3s ease-out' }}>
              Ingresa en tu cuenta
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-secondary-300 text-secondary-50 bg-transparent placeholder-transparent focus:outline-none focus:border-primary-500"
                  required=""
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  className="absolute left-0 -top-3.5 text-secondary-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-500 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  className="peer h-10 w-full border-b-2 border-secondary-300 text-secondary-50 bg-transparent placeholder-transparent focus:outline-none focus:border-primary-500"
                  required=""
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  className="absolute left-0 -top-3.5 text-secondary-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary-500 peer-focus:text-sm"
                  htmlFor="password"
                >
                  Contraseña
                </label>
              </div>
              {submitted && error && <p className="text-red-500 text-center">{error}</p>}
              <button
                className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-700 rounded-md shadow-lg text-secondary-50 font-semibold transition duration-200"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </form>
            <div className="text-center text-secondary-300">
              ¿No tienes una cuenta?{' '}
              <a className="text-primary-300 hover:underline cursor-pointer" onClick={redirectToRegister}>
                Regístrate
              </a>
            </div>
          </div>
        </div>

        <Footer />
    </>
  );
};

export default Login;
