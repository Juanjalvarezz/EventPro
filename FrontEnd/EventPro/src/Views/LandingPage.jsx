import { useEffect } from 'react'
import Trail from '../components/LandingPage/Trail'
import LoginHeader from '../components/Header/LoginHeader'
import LandingCard from '../components/LandingPage/LandingCard'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(()=> {
    if (user){
      if (user.role === 'user') {
        navigate("/dashboard")
      } else if (user.role === 'promotor') {
        navigate("/promotor")
      } else if (user.role === 'admin') {
        navigate("/adminDashboard")
      }
    }
  }, [user, navigate])

  return (
    <>
      <LoginHeader />

      <section className="w-11/12 mx-auto mt-10 text-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-baseline cursor-pointer">
          <Trail />
          <LandingCard />
        </div>
      </section>


      <Footer />
    </>
  )
}

export default LandingPage
