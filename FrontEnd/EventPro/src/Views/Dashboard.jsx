import React from 'react'
import Footer from '../components/Footer';
import UserHeader from '../components/Header/UserHeader';
import DashboardCards from '../components/Dashboard/DashboardCards';

const Dashboard = () => {
  return (
    <>
    <UserHeader/>

    <DashboardCards/>

    <Footer/>
    </>
  )
}

export default Dashboard
