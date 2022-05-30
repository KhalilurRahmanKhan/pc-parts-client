import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [admin, setAdmin] = useState(false);
  const [authUser, loading, error] = useAuthState(auth);

  const checkRole = (data)=>{
    if(data.role === "admin"){
      setAdmin(true);
    }
  }

  useEffect(()=>{
      fetch("https://guarded-shelf-82309.herokuapp.com/user/"+authUser.email)
      .then(res=>res.json())
      .then(data=>checkRole(data))
    },[authUser.email]);


 
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <div className=''>

          <label for="my-drawer-2" class="btn btn-sm rounded-none	 btn-block bg-violet-400 border-none drawer-button lg:hidden">Open Sidebar</label>
        </div>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-violet-50 text-base-content ">
          <li><Link to="my-profile">My Profile</Link></li>
          {
            !admin ?
              <>
                <li><Link to="my-orders">My Orders</Link></li>
                <li><Link to="add-review">Add review</Link></li>
              </> :
              <>

                {/* <li><Link to="manage-orders">Manage orders</Link></li> */}
                <li><Link to="add-product">Add product</Link></li>
                <li><Link to="make-admin">Make admin</Link></li>
                <li><Link to="manage-products">Manage products</Link></li>
              </>
          }


        </ul>

      </div>
    </div>
  );
};

export default Dashboard;