import Footer from '../components/Footer'; 
import Header from '../components/Header/Header';
import DashboardCards from '../components/Dashboard/DashboardCards';
import AnimatedPage from '../components/Animation/AnimatedPage';
import { useAuth } from '../contexts/AuthContext';
import UserContent from '../components/Dashboard/UserContent';
import ScrollToTopButton from '../components/Animation/ScrollToTopButton';
import EventCard from '../components/Eventos/EventCard';
import { getAllEvents } from '../utils/eventRequest';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await getAllEvents();
      setEvents(res.data.events);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user.role === 'admin'){
      fetchEvents()
    }
  }, [])

  return (
    <>
      <Header />
      <AnimatedPage>
        {user.role === 'admin' ? (
          <>
            <div className='flex justify-center items-center mx-auto'>
              <EventCard 
                events={events}
                userRole={user.role}
              />
            </div>
          </>
        ) : (

          <>
            <DashboardCards />
            <UserContent/>

          </>
        )}

      </AnimatedPage>
      <Footer />
      <ScrollToTopButton/>
    </>
  )
}

export default Dashboard
