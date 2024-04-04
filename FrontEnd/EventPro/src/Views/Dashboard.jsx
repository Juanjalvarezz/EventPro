import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import DashboardCards from '../components/Dashboard/DashboardCards';
import AnimatedPage from '../components/Animation/AnimatedPage';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();


  return (
    <>
      <Header />
      <AnimatedPage>
        {user.role === 'admin' ? (
          <>
            <div className='text-center py-52'>
              <h1>Admin Dashboard + eventos con editar y eliminar</h1>
            </div>
          </>
        ) : (
          <DashboardCards />
        )}

      </AnimatedPage>
      <Footer />
    </>
  )
}

export default Dashboard
