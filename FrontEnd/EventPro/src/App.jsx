import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Views/Register'
import Login from './Views/Login'
import Dashboard from './Views/Dashboard'
import AdminPage from './Views/AdminPage'
import PromotorPage from './Views/PromotorPage'

function App() {

  return (
    <Router>
    <Routes>

        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/adminDashboard' element={<AdminPage/>} />
        <Route path='/promotor' element={<PromotorPage/>} />

    </Routes>
  </Router>
  )
}

export default App
