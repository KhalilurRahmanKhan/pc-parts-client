import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';


function AddProduct() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [minQuantity, setMinQuantity] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleAdd = () => {
        fetch('http://localhost:5000/product/add', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({  name, image , description, minQuantity, quantity, price }),
        })
          .then(res => res.json())
          .then(data => console.log(data))
    
          setName('');
          setImage('');
          setDescription('');
          setMinQuantity('');
          setQuantity('');
          setPrice('');
    
          toast("Product added successfully");
    
      }
    
    return ( 
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
            <ToastContainer/>
        <h1 className='text-xl mt-5 mx-5 text-center'>Add Products</h1>
        <div className="card-body ">
            <div className="form-control">
               
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className="input input-bordered input-sm" />
            </div>
            <div className="form-control">
                
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image url" className="input input-bordered input-sm" />
            </div>
            <div className="form-control">
               
                <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="short description" className="textarea textarea-bordered textarea-sm" />
            </div>
            <div className="form-control">
                
                <input type="text" value={minQuantity} onChange={(e) => setMinQuantity(e.target.value)} placeholder="minimum order quantity" className="input input-bordered input-sm" />
            </div>
            <div className="form-control">
                
                <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="available quantity" className="input input-bordered input-sm" />
            </div>
            
            <div className="form-control">
                
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" className="input input-bordered input-sm" />
            </div>
            
                <button onClick={handleAdd}  className="btn btn-accent btn-sm">Add</button>
           
        </div>
       
    </div>
     );
}

export default AddProduct;