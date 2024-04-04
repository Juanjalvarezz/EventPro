import Footer from '../components/Footer'
import Header from '../components/Header/Header';

import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import AnimatedPage from '../components/Animation/AnimatedPage';
import FormRequest from '../components/Solicitudes/FormRequest'
import Solicitudes from '../components/Solicitudes/Solicitudes';

function Solicitud() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role !== 'promotor' && user.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [user, navigate])

  return (
    <>
      <Header />
      <AnimatedPage>
        <div className='flex justify-center items-center flex-col w-full'>
          <FormRequest />
          <Solicitudes />
        </div>
      </AnimatedPage>
      <Footer />
    </>
  )
}

export default Solicitud
