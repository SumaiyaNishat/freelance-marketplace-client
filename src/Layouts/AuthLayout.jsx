import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
        <header className='w-11/12 mx-auto py-2'>
            <Navbar></Navbar>
        </header>
        <main className=''>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default AuthLayout;