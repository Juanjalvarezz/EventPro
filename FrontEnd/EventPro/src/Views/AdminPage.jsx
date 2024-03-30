import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';
import AnimatedPage from '../components/AnimatedPage';

const AdminPage = () => {
  return (
    <>
    <AnimatedPage>
    <AdminHeader/>

    <div className='text-center'>
      <h1>Admin Dashboard + eventos con editar y eliminar</h1>
    </div>

    <Footer/>
    </AnimatedPage>
    </>
  )
}

export default AdminPage
