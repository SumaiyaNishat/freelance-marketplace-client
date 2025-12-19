import React, { use } from 'react'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';



const Navbar = () => {

    const { user, signOutUser } =use(AuthContext);

     const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log("Logout error:", error.message);
      });
  };

     const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
     {
      user && <>
       <li>
        <NavLink to="/addJob">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/myAcceptedTasks">My Tasks</NavLink>
      </li>
      </>
     }
      
      

    </>
  );
  return (
     <div className="navbar bg-base-100 shadow-sm">
       
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">Freelance<span className="text-blue-800">MarketPlace</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        
         {user ? (
        <div className="flex items-center gap-4">
          <span>{user.displayName || user.email}</span>
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-outline"
          >
            Logout
          </button>
        </div>
      ):
          <div className='flex gap-2'>
            <Link to="/auth/login" className='bg-blue-300 w-25 h-8 text-center text-white rounded-md'>Login</Link>

            <Link to="/auth/register" className='bg-blue-500 w-25 h-8 text-center text-white rounded-md'>Register</Link>
          </div>
         }
        
      </div>
      
    </div>
  )
}

export default Navbar;