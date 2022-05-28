import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import './myorders.css';


const MyOrders = () => {

    const handleConfirmation = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => console.log("yes")
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
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>
                            <button  className='btn btn-sm btn-error'>Cancel</button>
                            <Link to="payment" className='btn btn-sm btn-primary'>Payment</Link>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div >

    );
};

export default MyOrders;