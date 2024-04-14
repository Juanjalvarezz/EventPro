import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import AnimatedPage from '../components/Animation/AnimatedPage';
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';
import PaymentCard from '../components/Boletos/PaymentCard';
import { getPaymentRecords } from '../utils/paymentRequest';
import Loading from '../components/Animation/Loading';
import {toast, ToastContainer} from 'react-toastify';

function AdminPagos() {
  const [payments, setPayments] = useState([]);
  const [isChanges, setIsChanges] = useState(false);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const res = await getPaymentRecords();
      console.log(res)
      setPayments(res.data.paymentRecords);
    } catch (error) {
      console.log(error)
      return setPayments([]);
    } finally {
      setLoading(false);
      setIsChanges(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    if (isChanges) {
      fetchPayments();
    }
  }, [isChanges]);

  //Mostrar mensajes de alertas
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]
)
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage])

  return (
    <>
      <Header />
      <AnimatedPage>
        <ToastContainer />
        <h1 className='text-3xl text-center poppins font-bold mb-4 bg-gradient-to-r w-fit p-3 mx-auto from-complement-800 to-primary-600 rounded-xl shadow-2xl overflow-hidden'>Pagos de Usuarios</h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            {payments.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 p-4">
                {payments.map((payment) => (
                  <PaymentCard key={payment._id} payment={payment} id={payment._id} setIsChanges={setIsChanges} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} />
                ))}
              </div>
            ) : (
              <>
                <h2 className='text-center text-3xl poppins font-extrabold py-52'>No se encontraron Pagos Pendientes</h2>
              </>
            )}
          </>
        )}

      </AnimatedPage>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default AdminPagos
