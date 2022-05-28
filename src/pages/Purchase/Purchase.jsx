import React, { useState } from 'react';

const Purchase = () => {
    let [quantity,setQuantity] = useState(0);

    const handleMinus = ()=>{
      
        setQuantity(quantity-1);
        console.log("clicked");
    }
    const handlePlus = ()=>{
      
        setQuantity(quantity+1);
        console.log("clicked");
    }
    return (
     <div>
            <div class="hero">
            <div class="hero-content flex-col lg:flex-row w-full">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
              <div>
                  <p className='mx-10 mb-3 text-3xl'>kljgvuy</p>
                  <p className='mx-10 text-lg'>Email:</p>
                  <div className='flex w-full m-10'>
                    <div className='flex-1 w-1/2'>
                        <div className='flex'>
                            <p className='w-1/3'><b>Quantity  :</b></p>
                            <p className='w-2/3'><button onClick={handleMinus} className='px-3 m-1 text-white rounded bg-violet-500 cursor-pointer '>-</button><input value={quantity} className='w-[30px] text-center border-2' type="text" /> <span onClick={handlePlus} className='px-3 cursor-pointer   text-white rounded bg-violet-500'>+</span></p>
                        </div>
                        <small className='text-error'>kjhglg</small>
                    </div>
                    <div className='flex-1 w-1/2'>

                    <div className='flex'>
                            <p className='w-1/3'><b>jkgjyh  :</b></p>
                            <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, velit.</p>
                        </div>
                    </div>
                </div>
                  <div className='flex w-full m-10'>
                    <div className='flex-1 w-1/2'>
                        <div className='flex'>
                            <p className='w-1/3'><b>Quantity  :</b></p>
                            <p className='w-2/3'><button onClick={handleMinus} className='px-3 m-1 text-white rounded bg-violet-500 cursor-pointer '>-</button><input value={quantity} className='w-[30px] text-center border-2' type="text" /> <span onClick={handlePlus} className='px-3 cursor-pointer   text-white rounded bg-violet-500'>+</span></p>
                        </div>
                        <small className='text-error'>kjhglg</small>
                    </div>
                    <div className='flex-1 w-1/2'>

                    <div className='flex'>
                            <p className='w-1/3'><b>jkgjyh  :</b></p>
                            <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, velit.</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>



        <div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
            <h1 className='text-xl mt-5 mx-5 text-center'>Payment Options</h1>
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
        </div>




     </div>
    );
};

export default Purchase;