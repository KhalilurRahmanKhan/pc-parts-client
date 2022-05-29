import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

function AddReview() {
    const [rating, setRating] = useState();
    const [review, setReview] = useState();

    const [user] = useAuthState(auth);

    let email = user.email;
    let name = user.displayName;


    const handleAdd = () => {


        fetch('http://localhost:5000/review/add', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({  rating, review ,name,email }),
        })
          .then(res => res.json())
          .then(data => console.log(data))
    
          setReview('');
    
          toast("Review added successfully");
    
      }
    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
            <h1 className='text-xl mt-5 mx-5 text-center'>Add a review</h1>
            <div className="card-body ">
                <ToastContainer/>

               
                <div className="form-control">
                    <textarea rows="4" type="text"  value={review} onChange={(e)=>setReview(e.target.value)} placeholder="Review" className=" textarea textarea-bordered" ></textarea>
                </div>

                <button className="btn btn-accent btn-sm" onClick={handleAdd}>Add</button>

            </div>

        </div>
    );
}

export default AddReview;