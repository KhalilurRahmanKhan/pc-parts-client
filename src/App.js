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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />
        </Route>
        <Route path="purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
