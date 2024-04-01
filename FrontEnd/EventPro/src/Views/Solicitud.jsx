import Footer from '../components/Footer'
import PromotorHeader from '../components/PromotorHeader'
import AdminHeader from '../components/AdminHeader';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import FormRequest from '../components/Solicitudes/FormRequest'
import { useEffect } from 'react';
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
      {user.role === 'admin' ? (
        <AdminHeader />
      ) : (
        <PromotorHeader />
      )}
      <div className='flex justify-center items-center flex-col w-full'>
        <FormRequest />
        <Solicitudes />
      </div>
      <Footer />
    </>
  )
}

export default Solicitud
