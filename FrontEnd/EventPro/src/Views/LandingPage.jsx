import React from 'react'
import Trail from '../components/Trail'
import LoginHeader from '../components/LoginHeader'
import LandingCard from '../components/LandingCard'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
    <LoginHeader/>

    <section className="w-11/12 mx-auto mt-10 text-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-baseline cursor-pointer">
        <Trail/>
        <LandingCard/>
      </div>
    </section>


    <Footer/>
    </>
  )
}

export default LandingPage
