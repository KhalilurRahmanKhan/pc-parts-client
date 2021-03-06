import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const Login = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleSignInWithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(from,{replace:true});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

            setEmail('');
            setPassword('');
    }

    const handleSignInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                const email = user.email;
                console.log(email);
                console.log(user);

                fetch(`https://guarded-shelf-82309.herokuapp.com/user/${email}`, {
                    method: "put",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({  email }),
                  })
                    .then(res => res.json())
                    .then(data => console.log(data))

                navigate(from,{replace:true});

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            });

    }

    const passwordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast("Password reset mail sent!")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
            <div className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <button onClick={passwordReset} className="label-text-alt link link-hover">Forgot password?</button>
                    </label>
                </div>
                <small className='text-error'>{error && error}</small>
                <div className="form-control mt-6">
                    <button onClick={handleSignInWithEmailAndPassword} className="btn btn-primary">Login</button>
                </div>

                <div class="divider">OR</div>
                <button className="btn btn-success text-white" onClick={handleSignInWithGoogle}>Continue with google</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;