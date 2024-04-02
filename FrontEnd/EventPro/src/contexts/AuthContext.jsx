import { loginRequest, verifyRequest, signupRequest } from '../utils/authRequest.js';
import { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');

  const register = async (name, email, password, isPromotor) => {
    try {
      const res =  await signupRequest({
        name,
        email,
        password,
        role: isPromotor ? "promotor" : "user", // Envía el rol seleccionado
      });
      return res;
    } catch (error) {
      console.log(error)
      setErrors(error.response.data.message);
    }
  }

  const login = async (email, password) => {
    try {
      const res = await loginRequest({
        email,
        password,
      });
      if (!res.data) {
        logout();
      }
      console.log(res.data)
      setIsAuthenticated(true);
      setUser(res.data.user)
      //Guardar el token en localStorage para mantener sesion iniciada
      localStorage.setItem('token', res.data.token)
    } catch (error) {
      console.log(error.response.data.message);
      setErrors(error.response.data.message)
      logout();
      return error;
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);

    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  //Vaciar errors despues de 7 segundos de haberse mostrado
  useEffect(()=> {
    if (errors.length > 0) {
      const timer = setTimeout(()=> {
        setErrors('');
      }, 7000)
  
      return () => clearTimeout(timer);
    }

  }, [errors])

  //Verificar sesion al momento de cargar
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
    } else {
      verifyToken(token);
    }

  }, [])

  const verifyToken = async (token) => {
    try {
      const res = await verifyRequest({ token })
      if (!res.data) {
        logout();
      } else {
        setUser(res.data.user)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log(error)
      logout();
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
          loading,
          register,
          login,
          logout,
          errors
        }}
      >
        {!loading && children}
      </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth debe ser utilizado con AuthProvider")
  }
  return context;
};
