import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/Header/AdminHeader';

const AdminPage = () => {
  return (
    <>
    <AdminHeader/>

    <div className='text-center py-52'>
      <h1>Admin Dashboard + eventos con editar y eliminar</h1>
    </div>

    <Footer/>
    </>
  )
}

export default AdminPage
