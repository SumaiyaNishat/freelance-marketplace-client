import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';


const AuthLayout = () => {
  return (
    <div className='bg-base-200'>
        <header className=''>
            <Navbar></Navbar>
        </header>
        <main className=''>
            <Outlet></Outlet>
        </main>
        
    </div>
  )
}

export default AuthLayout;