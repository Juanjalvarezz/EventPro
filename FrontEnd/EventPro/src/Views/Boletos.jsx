import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/AuthContext'
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';
import AnimatedPage from '../components/Animation/AnimatedPage';
import Pagos from '../components/Solicitudes/Pagos';
import { useLocation } from 'react-router-dom';

function Boletos() {
  const { user } = useAuth();
  const location = useLocation();
  const ticket = location.state?.boleto;

  return (
    <>
      <AnimatedPage>
        <Header />
        {user.role === 'admin' ? (
          <>
            <h1 className='text-center py-52'>Boletos comprados por evento</h1>
          </>
        ) : (
          <>
            <Pagos 
              ticket={ticket}
            />
          </>
        )}

        <Footer />
        <ScrollToTopButton />
      </AnimatedPage>
    </>
  )
}

export default Boletos
