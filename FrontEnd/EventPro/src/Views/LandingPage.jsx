import React from 'react'
import Trail from '../components/Trail'
import LoginHeader from '../components/LoginHeader'
import LandingCard from '../components/LandingCard'
import Footer from '../components/Footer'
import AnimatedPage from '../components/AnimatedPage'

function LandingPage() {
  return (
    <>
    <AnimatedPage>
    <LoginHeader/>

    <section className="w-11/12 mx-auto mt-10 text-center">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-baseline cursor-pointer">
        <Trail/>
        <LandingCard/>
      </div>
    </section>


    <Footer/>
    </AnimatedPage>
    </>
  )
}

export default LandingPage
