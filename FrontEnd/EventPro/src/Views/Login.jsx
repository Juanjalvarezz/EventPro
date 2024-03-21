import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        const userRole = res.data.user && res.data.user.role; 

        console.log('UserRole:', userRole); 

        if (userRole === 'user') {
          window.location.href = '/dashboard';
        } else if (userRole === 'admin') {
          window.location.href = '/adminDashboard';
        } else if (userRole === 'promotor') {
          window.location.href = '/promotor';
        }
      } else {
        setError('Respuesta invalida del servidor');
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const redirectToRegister = () => {
    window.location.href = '/'; 
  };

  return (
    
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-11/12 bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 md:w-4/5" style={{ animation: 'slideInFromLeft 1s ease-out' }}>
        <h2 className="text-center text-4xl font-extrabold text-white -mb-5" style={{ animation: 'appear 2s ease-out' }}>
          Bienvenido
        </h2>
        <p className="text-center text-gray-200" style={{ animation: 'appear 3s ease-out' }}>
          Ingresa en tu cuenta
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
              required=""
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="password"
            >
              Contraseña
            </label>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </form>
        <div className="text-center text-gray-300">
          No tienes una cuenta?{' '}
          <a className="text-purple-300 hover:underline cursor-pointer" onClick={redirectToRegister}>
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
