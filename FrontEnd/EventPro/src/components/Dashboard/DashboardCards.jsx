import { useAuth } from '../../contexts/AuthContext';
import Carousel from './carrusel';

function DashboardCards() {
  const { user } = useAuth();
  const firstName = user.name.split(' ')[0];

  return (
    <>
    {user.role === 'user' ? (
          <>
            <div className='bg-[#592E83] h-full -mt-8 p-8'>
              <h1 className='lg:text-4xl md:text-5xl sm:text-3xl text-center poppins font-bold mb-6'>
                Hola! <span className='text-primary-400'> {firstName} </span> Bienvenido a EventPro!
              </h1>
              <Carousel />
            </div>
          </>
        ) : (

          <>
            <div className='bg-[#592E83] h-full -mt-8 p-8'>
              <h1 className='lg:text-4xl md:text-5xl sm:text-3xl text-center poppins mb-6'>
                Hola! <span className='text-primary-400'> {firstName} </span> Bienvenido a EventPro!
              </h1>
              <h1 className='lg:text-4xl md:text-5xl sm:text-3xl text-center font-bold poppins mb-6'>
              Gracias por ser parte de nosotros siendo <br/> uno de nuestros <span className='text-primary-600'>Promotores</span>! 
              </h1>
              <Carousel />
            </div>

          </>
        )}
    </>
  );
}

export default DashboardCards;
