import React from 'react'
import Footer from '../components/Footer';
import UserHeader from '../components/UserHeader';

const Dashboard = () => {
  return (
    <>
    <UserHeader/>

    <div className='bg-green-500'>
      <h1>Dashboard</h1>
    </div>

    <Footer/>
    </>
  )
}

export default Dashboard
