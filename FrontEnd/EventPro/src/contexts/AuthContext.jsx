import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password,
      });
      if (!res.data) {
        setIsAuthenticated(false);
        setUser(null)
        setLoading(false)
      }
      console.log(res.data)
      setIsAuthenticated(true);
      setUser(res.data.user)
      //Guardar el token en localStorage para mantener sesion iniciada
      localStorage.setItem('token', res.data.token)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setUser(null)
      setIsAuthenticated(false);
      setLoading(false);
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);

    localStorage.removeItem('token')
  }

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
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/verify`, { token })
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
          login,
          logout
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
    throw new Error("useAuth debe ser utlizado con AuthProvider")
  }
  return context;
};