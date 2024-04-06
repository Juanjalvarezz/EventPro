import { useAuth } from '../../contexts/AuthContext';
import Carousel from './carrusel';

function DashboardCards() {
  const { user } = useAuth();
  const firstName = user.name.split(' ')[0];

  return (
    <>
      <div className='dark:bg-primary-750 bg-primary-600 h-full -mt-8 p-8'>
        <h1 className='lg:text-4xl md:text-5xl sm:text-3xl text-center poppins font-bold mb-6'>
          Hola! <span className='dark:text-primary-400 text-primary-300'> {firstName} </span> Bienvenido a EventPro!
        </h1>

        {user.role === 'promotor' && (
          <>
            <h1 className='lg:text-4xl md:text-5xl sm:text-3xl text-center font-bold poppins mb-6'>
              Gracias por ser parte de nosotros siendo <br /> uno de nuestros <span className='dark:text-primary-600 text-primary-100'>Promotores</span>!
            </h1>
          </>
        )}

        <Carousel />
      </div>
    </>
  );
}

export default DashboardCards;
