import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import AnimatedPage from '../components/Animation/AnimatedPage';
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';

function AdminPagos() {
  return (
    <>
     <Header />
      <AnimatedPage>
        
        <h1 className='text-3xl text-center poppins font-bold mb-4 bg-gradient-to-r w-fit p-3 mx-auto from-complement-800 to-primary-600 rounded-xl shadow-2xl overflow-hidden'>Pagos de Usuarios</h1>
        

      </AnimatedPage>
      <Footer />
      <ScrollToTopButton/>
    </>
  )
}

export default AdminPagos
