import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <footer>
          <Footer></Footer>
        </footer>
    </div>
  )
}

export default RootLayout;