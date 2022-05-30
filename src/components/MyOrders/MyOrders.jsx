import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './myorders.css';


const MyOrders = () => {

    const [orders,setOrders] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(()=>{
        fetch("http://localhost:5000/order/"+user.email)
        .then(res=>res.json())
        .then(data=>setOrders(data))
      },[user.email,orders]);


      const handleDelete = (id)=>{
        fetch('http://localhost:5000/order/delete/'+id, {
            method: "Delete",
          })
          .then(res => res.json())
          .then(data => console.log(data))
          toast("Order deleted successfully");
      }

    const handleConfirmation = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDelete(id)
                },
                {
                    label: 'No',
                    onClick: () => console.log("no")
                }
            ]
        });
    }

    return (
        <div class="overflow-x-auto" >
            <ToastContainer/>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Quantity</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=>
                            <tr key={order._id}>
                            <td>{order.id}</td>
                            <td>{order.quantity}</td>
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
                            <td>
                                <button onClick={()=>handleConfirmation(order._id)}  className='btn btn-sm btn-error'>Cancel</button>
                                {/* <Link to={`payment/${order.id}/${order._id}`} className='btn btn-sm btn-primary'>Payment</Link> */}
                            </td>
                        </tr>
                            )
                    }
                   

                </tbody>
            </table>
        </div >

    );
};

export default MyOrders;