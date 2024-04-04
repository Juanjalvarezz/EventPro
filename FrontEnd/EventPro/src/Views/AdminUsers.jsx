import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import UsersList from '../components/UsersList';
import AnimatedPage from '../components/Animation/AnimatedPage';

function AdminUsers() {
  return (
    <>
      <Header />
      <AnimatedPage>
        
        <h1 className='text-3xl text-center poppins font-bold mb-4'>Lista de Usuarios</h1>
        <UsersList />

      </AnimatedPage>
      <Footer />
    </>
  )
}

export default AdminUsers
