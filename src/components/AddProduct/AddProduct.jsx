function AddProduct() {
    return ( 
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
        <h1 className='text-xl mt-5 mx-5 text-center'>Add Products</h1>
        <div className="card-body ">
            <div className="form-control">
               
                <input type="text" placeholder="name" className="input input-bordered input-sm" />
            </div>
            <div className="form-control">
                
                <input type="email" placeholder="email" className="input input-bordered input-sm" />
            </div>
            <div className="form-control">
               
                <input type="password"  placeholder="password" className="input input-bordered input-sm" />
            </div>
            
                <button  className="btn btn-accent btn-sm">Pay</button>
           
        </div>
       
    </div>
     );
}

export default AddProduct;