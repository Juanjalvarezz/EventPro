import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';
import AnimatedPage from '../components/AnimatedPage';

const AdminPage = () => {
  return (
    <>
    <AnimatedPage>
    <AdminHeader/>

    <div className='bg-red-500'>
      <h1>admin</h1>
    </div>

    <Footer/>
    </AnimatedPage>
    </>
  )
}

export default AdminPage
