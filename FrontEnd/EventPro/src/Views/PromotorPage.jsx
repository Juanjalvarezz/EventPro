import Footer from '../components/Footer'
import UserHeader from '../components/UserHeader'
import AnimatedPage from '../components/AnimatedPage'

function PromotorPage() {
  return (
    <>
    <AnimatedPage>
    <UserHeader/>

    <div className='bg-blue-500'>
      <h1>Promotor</h1>
    </div>

    <Footer/>
    </AnimatedPage>
    </>
  )
}

export default PromotorPage
