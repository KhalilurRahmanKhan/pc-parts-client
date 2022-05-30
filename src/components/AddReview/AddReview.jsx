import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

function AddReview() {

  const [user] = useAuthState(auth);

  let email = user.email;
  let name = user.displayName;


  const handleAdd = (e) => {
    e.preventDefault();
let rating = e.target.rating.value || 5;
let review = e.target.review.value;

    fetch('https://guarded-shelf-82309.herokuapp.com/review/add', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ rating, review, name, email }),
    })
      .then(res => res.json())
      .then(data => console.log(data))




    toast("Review added successfully");

  }
  return (
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
      <h1 className='text-xl mt-5 mx-5 text-center'>Add a review</h1>
      <div className="card-body text-center ">
        <ToastContainer />
      <form action="" onSubmit={handleAdd}>
        <div class="rating border-2 p-2 mb-2 rounded">
          <input type="radio" name="rating" value="1" class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating" value="2"  class="mask mask-star-2 bg-green-500"  />
          <input type="radio" name="rating" value="3"  class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating" value="4"  class="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating" value="5"  class="mask mask-star-2 bg-green-500"/>
        </div>
        <div className="form-control">
          <textarea rows="4" type="text" name="review" placeholder="Review" className=" textarea textarea-bordered" ></textarea>
        </div>

        <button className="btn btn-accent btn-sm mt-5" type="submit">Add</button>
   </form>
      </div>

    </div>
  );
}

export default AddReview;