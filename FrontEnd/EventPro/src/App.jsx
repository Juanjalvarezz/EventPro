import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import AdminPage from "./Views/AdminPage";
import PromotorPage from "./Views/PromotorPage";
import LandingPage from "./Views/LandingPage";
import AdminUsers from "./Views/AdminUsers";
import Profile from "./Views/Profile";
import AboutUs from "./Views/AboutUs";
import Solicitudes from "./Views/Solicitudes";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoutes from "./ProtectedRoutes";
import ConditionalRedirect from './utils/ConditionalRedirect'
import AdminBoletos from "./Views/AdminBoletos";
import Eventos from "./Views/Eventos";
import Boletos from "./Views/Boletos";
import Solicitud from "./Views/Solicitud";
import PromoAboutUs from "./Views/PromoAboutUs";
import PromoProfile from "./components/PromoProfile";
import LoginAboutUs from "./components/LoginAboutUs";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas publicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginAboutUs" element={<LoginAboutUs />} />

          {/* Rutas condicionales */}
          <Route element={<ConditionalRedirect to="/dashboard" />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/adminDashboard" element={<AdminPage />} />
            <Route path="/promotor" element={<PromotorPage />} />
            <Route path="/adminUsers" element={<AdminUsers />} />
            <Route path="/solicitudes" element={<Solicitudes />} />
            <Route path="/adminBoletos" element={<AdminBoletos />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/boletos" element={<Boletos />} />
            <Route path="/solicitud" element={<Solicitud />} />
            <Route path="/promoAboutUs" element={<PromoAboutUs />} />
            <Route path="/promoProfile" element={<PromoProfile />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
