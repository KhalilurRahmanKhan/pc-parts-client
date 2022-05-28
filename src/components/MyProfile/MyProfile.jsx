import React from 'react';

const MyProfile = () => {
    return (
        <div className='w-2/3 mx-auto my-10 bg-base-200 p-10 rounded-lg text-center'>
            <h1 className='text-2xl'>Name</h1>
            <h1 className='text-lg'>Email</h1>
            <textarea  class="textarea textarea-bordered w-full mt-2" placeholder="Education"></textarea>
            <textarea  class="textarea textarea-bordered w-full mt-2" placeholder="Location"></textarea>
            <input  class="input input-bordered w-full mt-2" placeholder="Phone number"></input>
            <input  class="input input-bordered w-full mt-2" placeholder="Linkedin profile link"></input>
            <button className='btn btn-accent text-white btn-sm mt-5'>Update</button>
        </div>
    );
};

export default MyProfile;