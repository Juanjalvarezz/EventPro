import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';
import UsersList from '../components/UsersList';

function AdminUsers() {
  return (
    <>
    <AdminHeader/>

    <UsersList/>

    <Footer/>
    </>
  )
}

export default AdminUsers
