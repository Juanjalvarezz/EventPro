import React from 'react'
import Footer from '../components/Footer';
import UserHeader from '../components/UserHeader';
import DashboardCards from '../components/DashboardCards';
import AnimatedPage from '../components/AnimatedPage';

const Dashboard = () => {
  return (
    <>
    <AnimatedPage>
    <UserHeader/>

    <DashboardCards/>

    <Footer/>
    </AnimatedPage>
    </>
  )
}

export default Dashboard
