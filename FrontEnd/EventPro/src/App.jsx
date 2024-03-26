import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import AdminPage from "./Views/AdminPage";
import PromotorPage from "./Views/PromotorPage";
import LandingPage from "./Views/LandingPage";
import AdminUsers from "./Views/AdminUsers";
import Profile from "./Views/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminDashboard" element={<AdminPage />} />
        <Route path="/promotor" element={<PromotorPage />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
