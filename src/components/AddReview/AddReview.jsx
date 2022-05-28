function AddReview() {
    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10">
            <h1 className='text-xl mt-5 mx-5 text-center'>Add a review</h1>
            <div className="card-body ">

                <div class="rating mx-auto">
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                </div>
                <div className="form-control">
                    <textarea rows="5" type="text" placeholder="Review" className=" input input-bordered" ></textarea>
                </div>

                <button className="btn btn-accent btn-sm">Add</button>

            </div>

        </div>
    );
}

export default AddReview;