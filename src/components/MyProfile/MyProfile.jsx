import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [education,setEducation] = useState([]);
    const [location,setLocation] = useState([]);
    const [phone,setPhone] = useState([]);
    const [link,setLink] = useState([]);

    const [user, loading, error] = useAuthState(auth);

    const handleAdd = ()=>{
        fetch(`https://guarded-shelf-82309.herokuapp.com/user/${user.email}`, {
            method: "put",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({  education,location,phone,link }),
          })
          toast("User profile updated!");
          setEducation('');
          setLink('');
          setLocation('');
          setPhone('');
    }
    return (
        <div className='w-2/3 mx-auto my-10 bg-base-200 p-10 rounded-lg text-center'>
            <ToastContainer></ToastContainer>
            <hr />
            <h1 className='text-2xl'>{user.displayName}</h1>
            <hr />
            <h1 className='text-lg'>{user.email}</h1>
            <hr />
            <textarea value={education} onChange={(e) => setEducation(e.target.value)}  class="textarea textarea-bordered w-full mt-2" placeholder="Education"></textarea>
            <textarea value={location} onChange={(e) => setLocation(e.target.value)}  class="textarea textarea-bordered w-full mt-2" placeholder="Location"></textarea>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}  class="input input-bordered w-full mt-2" placeholder="Phone number"></input>
            <input value={link} onChange={(e) => setLink(e.target.value)} class="input input-bordered w-full mt-2" placeholder="Linkedin profile link"></input>
            <button onClick={handleAdd}  className='btn btn-accent text-white btn-sm mt-5'>Update</button>
        </div>
    );
};

export default MyProfile;