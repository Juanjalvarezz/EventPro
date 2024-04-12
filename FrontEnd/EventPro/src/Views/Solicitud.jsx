import Footer from '../components/Footer'
import Header from '../components/Header/Header';

import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AnimatedPage from '../components/Animation/AnimatedPage';
import FormRequest from '../components/Solicitudes/FormRequest'
import Solicitudes from '../components/Solicitudes/Solicitudes';
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';
import { toast, ToastContainer } from 'react-toastify';

function Solicitud() {
  const { user } = useAuth();
  const [accepted, setAccepted] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (accepted) {
      const toastId = toast.success('Establece la hora y los boletos');

      setTimeout(() => {
        toast.success(toastId);
      }, 2000);
    }
  }, [accepted])

  useEffect(() => {
    if (user.role !== 'promotor' && user.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [user, navigate])

  return (
    <>
      <Header />
      <AnimatedPage>
        <ToastContainer />
        <div className='flex justify-center items-center flex-col w-full'>
          <FormRequest
            accepted={accepted}
          />
          <Solicitudes
            setAccepted={setAccepted}
          />
        </div>
      </AnimatedPage>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default Solicitud
