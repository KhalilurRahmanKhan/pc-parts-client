import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loader from '../../../components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithGoogle, GoogleUser, GoogleLoading, googleError] = useSignInWithGoogle(auth);

   
    if (GoogleLoading) {
        return <Loader />;
    }
    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
            <div className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <small className='text-error'>{googleError && googleError.message}</small>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

                <div class="divider">OR</div>
                <button className="btn btn-success text-white" onClick={() => signInWithGoogle()}>Continue with google</button>
            </div>
         
        </div>
    );
};

export default Login;