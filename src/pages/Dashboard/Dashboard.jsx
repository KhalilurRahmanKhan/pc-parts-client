import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
        <div className=''>

    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">|||</label>
        </div>
        <Outlet />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li><Link to="my-profile">My Profile</Link></li>
      <li><Link to="my-orders">My Orders</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;