import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/AuthContext'

function Boletos() {
  const { user } = useAuth();

  return (
    <>
      <Header />

      {user.role === 'admin' ? (
        <>
          <h1 className='text-center py-52'>Boletos comprados por evento</h1>
        </>
      ) : (
        <>
          <h1 className='text-center py-52'>Boletos comprados por el usuario</h1>
        </>
      )}

      <Footer />
    </>
  )
}

export default Boletos
