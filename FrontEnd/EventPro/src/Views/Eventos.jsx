import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { getEventsStatus } from '../utils/eventRequest'
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';
import Loading from '../components/Animation/Loading';
import EventCard from '../components/Eventos/EventCard';

function Eventos() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEventsAvailable();
  }, [])

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          {notFound || !events ? (
            <h1 className='text-center py-52'>No se han encontrado eventos disponibles</h1>
          ) : (
            <div className='flex justify-center items-center mx-auto'>
              <EventCard 
                events={events}
                userRole={user.role}
              />
            </div>
          )}
        </>
      )}

      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default Eventos
