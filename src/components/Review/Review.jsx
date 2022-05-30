import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Review() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://guarded-shelf-82309.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);
    return (
        <Carousel>
            {
                reviews.map(review =>
                    <div className="w-2/3 h-[30vh] bg-violet-500 text-white mx-auto rounded-lg pt-10">
                        <h1 className="text-2xl mb-3">{review.name}</h1>

                        <p>  {
                            (review.rating == 1) && <>
                                <i class="fa-solid fa-star"></i>
                            </>
                        }</p>
                        <p>  {
                            (review.rating == 2) && <>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                               
                            </>
                        }</p>
                        <p>  {
                            (review.rating == 3) && <>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                              
                            </>
                        }</p>
                        <p>  {
                            (review.rating == 4) && <>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </>
                        }</p>
                        <p>  {
                            (review.rating == 5) && <>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </>
                        }</p>





                        <p className="mt-5">{review.review}</p>
                    </div>
                )
            }



        </Carousel>
    );
}

export default Review;