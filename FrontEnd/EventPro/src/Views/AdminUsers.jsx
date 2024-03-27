import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';
import UsersList from '../components/UsersList';
import AnimatedPage from '../components/AnimatedPage';

function AdminUsers() {
  return (
    <>
    <AnimatedPage>
    <AdminHeader/>

    <h1 className='text-3xl text-center poppins font-bold mb-4'>Lista de Usuarios</h1>
    <UsersList/>

    <Footer/>
    </AnimatedPage>
    </>
  )
}

export default AdminUsers
