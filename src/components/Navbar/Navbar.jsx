import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('login');
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="navbar bg-violet-500 text-white	">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="purchase">Purchase</Link></li>
          </ul>
        </div>
        <Link to="" className="btn btn-ghost normal-case text-xl">PC Parts</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="purchase">Purchase</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button onClick={handleSignOut} className="btn btn-sm m-1 btn-error text-white">Logout</button> :
            <>
              <Link to="register" className="btn btn-sm m-1 btn-primary text-white">Register</Link>
              <Link to="login" className="btn btn-sm m-1 btn-success text-white">Login</Link>
            </>

        }
      </div>
    </div>
  );
};

export default Navbar;