import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register/Register';
import RequireAuth from './RequireAuth';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './components/MyProfile/MyProfile';
import MyOrders from './components/MyOrders/MyOrders';
import AddReview from './components/AddReview/AddReview';
import Payment from './pages/Payment/Payment';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddProduct from './components/AddProduct/AddProduct';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MyPortfolio from './pages/MyPortfolio/MyPortFolio';
import NotFound from './pages/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard/my-orders/payment" element={<Payment />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="make-admin" element={<MakeAdmin />} />
          <Route path="manage-products" element={<ManageProducts />} />
        </Route>
        <Route path="my-portfolio" element={<MyPortfolio />} />
        <Route path="purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
