import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { getEventsStatus } from '../utils/eventRequest'
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';

function Eventos() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const fetchEventsAvailable = async () => {
    try {
      const res = await getEventsStatus('Disponible');
      console.log(res)
      setEvents(res.data.events);
      setNotFound(false)
    } catch (error) {
      console.log(error)
      if (error.response.status === 404) {
        return setNotFound(true);
      }
    }
  }

  useEffect(() => {
    fetchEventsAvailable();
  }, [])

  return (
    <>
      <Header />
      {notFound || !events ? (
        <h1 className='text-center py-52'>No se han encontrado eventos disponibles</h1>
      ) : (
        <div className='flex justify-center items-center mx-auto'>
          <div className="grid grid-cols-2 gap-4">
            {events.map(event => (
              <div key={event._id} className="montserrat font-bold bg-primary-350 mx-auto p-6 rounded-3xl mb-6 text-xs md:text-sm lg:text-md">
                <div className="grid grid-cols-1 gap-3">
                  <div className="md:flex md:justify-center md:items-center md:flex-1">
                    <img className="lg:w-96 md:w-80 sm:w-72 rounded-3xl mx-auto" src={event.image} alt={event.name} />
                  </div>
                  <div className="flex flex-col justify-center items-center w-full">
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl text-[#CAA8F5] mb-4">{event.name}</p>
                    <div className="text-left">
                      <p className="sm:text-lg md:text-lg lg:text-xl">Ubicación: {event.place}</p>
                      <p className="sm:text-lg md:text-lg lg:text-xl">Fecha: {new Date(event.date).toLocaleDateString()}</p>
                      {
//                      <p className="sm:text-lg md:text-lg lg:text-xl">Hora: {event.date.getHours() + ':' + (event.date.getMinutes()).slice(-2)}</p>
                      }
                      <p className="sm:text-lg md:text-lg lg:text-xl">Hora: {new Date(event.date).toLocaleDateString()}</p>
                      <div className="flex justify-center md:justify-start">
                        <p className="text-sm sm:text-lg md:text-lg lg:text-xl">Estatus: </p>
                        <p className={`ml-2 ${event.status === 'Disponible' ? 'text-green-600' : 'text-amber-500'} text-sm sm:text-lg md:text-lg lg:text-xl`}>{event.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center p-2 gap-4 w-full">
                  {user.role === 'admin' ? (
                    <>
                      <button className="bg-blue-500 w-36 rounded-xl p-2 sm:text-md md:text-lg lg:text-xl">Aceptar</button>
                      <button
                        className="bg-red-500 w-36 rounded-xl p-2 sm:text-md md:text-lg lg:text-xl"
                      //onClick={() => handleOpenModal(event._id)}
                      >
                        {`${user.role === 'admin' ? 'Rechazar' : 'Cancelar'}`}
                      </button>
                    </>
                  ) : (
                    <button className="bg-blue-500 w-36 rounded-xl p-2 sm:text-md md:text-lg lg:text-xl">Aceptar</button>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default Eventos
