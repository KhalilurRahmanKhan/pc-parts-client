import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast, ToastContainer } from "react-toastify";

function ManageProducts() {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product/all")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools]);


    const handleDelete = (id)=>{
        fetch('http://localhost:5000/product/delete/'+id, {
            method: "Delete",
          })
          .then(res => res.json())
          .then(data => console.log(data))
          toast("Product deleted successfully");
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
            <ToastContainer></ToastContainer>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools.map(tool =>
                            <tr>
                                <td>{tool.name}</td>
                                <td>{tool.quantity}</td>
                                <td>{tool.price}</td>
                                <td>
                                    <button  onClick={()=>handleConfirmation(tool._id)} className='btn btn-sm btn-error'>Remove</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div >

    );
}

export default ManageProducts;