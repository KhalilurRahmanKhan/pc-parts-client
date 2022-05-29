import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';


const Purchase = () => {
    let [quantity, setQuantity] = useState(0);
    const [tool, setTool] = useState([]);
    let { id } = useParams();

    const [user] = useAuthState(auth);

    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    
    let email = user.email;



    if (quantity > tool.minQuantity) {

    }
    const handleMinus = () => {

        setQuantity(quantity - 1);
    }
    const handlePlus = () => {

        setQuantity(quantity + 1);
    }



    const handleOrder = () => {
        fetch('http://localhost:5000/order/add', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({  id, quantity , phone, address, email }),
        })
          .then(res => res.json())
          .then(data => console.log(data))
    
          setPhone('');
          setAddress('');
    
          toast("Order placed successfully");
    
      }



    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))

        setQuantity(parseInt(tool.minQuantity));
    }, [id, tool.minQuantity]);
    return (
        <div>
            <div class="hero w-full">
                <ToastContainer/>
                <div class="hero-content w-[80%] flex-col lg:flex-row ">
                    <img className='w-1/3 rounded' src={tool.image} alt="" />
                    <div className='w-2/3'>
                        <p className='mx-10 mb-3 text-3xl'>{user.displayName}</p>
                        <p className='mx-10 text-lg'>{user.email}</p>
                        <div className='flex w-full m-10'>
                            <div className='flex-1 w-1/2'>
                                <div className='flex'>
                                    <p className='w-1/3'><b>Name  :</b></p>
                                    <p className='w-2/3'>{tool.name}</p>
                                </div>
                            </div>
                            <div className='flex-1 w-1/2'>

                                <div className='flex'>
                                    <p className='w-1/3'><b>Description  :</b></p>
                                    <p className='w-2/3'>{tool.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full m-10'>
                            <div className='flex-1 w-[50%]'>
                                <div className='flex w-full'>
                                    <p className='w-1/3'><b>Quantity  :</b></p>
                                    <p className='w-2/3'><button onClick={handleMinus} className='px-3 m-1 text-white rounded bg-violet-500 cursor-pointer '>-</button><input value={quantity}  className='w-[30px] text-center border-2' type="text" /> <span onClick={handlePlus} className='px-3 cursor-pointer   text-white rounded bg-violet-500'>+</span></p>
                                </div>
                                <small className='text-error'>{(quantity < tool.minQuantity || quantity > tool.quantity) && "Must be between minimum and available quantity"}</small>
                            </div>
                            <div className='flex-1 w-[50%]'>

                                <div className='flex'>
                                    <p className='w-1/3'><b>Price  :</b></p>
                                    <p className='w-2/3'>{tool.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
                    <div className="card-body ">
                        <div className="form-control">

                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="input input-bordered input-sm" />
                        </div>
                        <div className="form-control">

                        <textarea type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="textarea textarea-bordered " ></textarea>
                        </div>


                        {(quantity < tool.minQuantity || quantity > tool.quantity) ? <button disabled className="btn btn-accent btn-sm" >Place Order</button> : <button onClick={handleOrder} className="btn btn-accent btn-sm">Place Order</button>}
                    </div>

                </div>
            </div>




        </div>
    );
};

export default Purchase;