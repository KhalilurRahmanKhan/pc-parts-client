function Review() {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full h-[40vh]">
                <div className="flex justify-center flex-col justify-center	 items-center w-full	">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h1 className="text-3xl m-5">kjgilug</h1>
                    <div class="rating">
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    </div>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, nisi!</p>
                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
            <div className="flex justify-center flex-col justify-center	 items-center w-full	">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h1 className="text-3xl m-5">kjgilug</h1>
                    <div class="rating">
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    </div>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, nisi!</p>
                </div>                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
            <div className="flex justify-center flex-col justify-center	 items-center w-full	">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h1 className="text-3xl m-5">kjgilug</h1>
                    <div class="rating">
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    </div>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, nisi!</p>
                </div>                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
            <div className="flex justify-center flex-col justify-center	 items-center w-full	">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h1 className="text-3xl m-5">kjgilug</h1>
                    <div class="rating">
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    </div>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, nisi!</p>
                </div>                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default Review;