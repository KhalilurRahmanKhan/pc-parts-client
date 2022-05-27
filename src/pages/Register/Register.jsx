import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');




    const handleCreateUserWithEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            toast('Vrification emal sent!');
                        });
                }).catch((error) => {
                    setError(error);
                });

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
            setEmail('');
            setName('');
            setPassword('');
    }
    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
            <div className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)} placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" />
                </div>
                <small className="text-error">{error && error}</small>
                <div className="form-control mt-6">
                    <button onClick={handleCreateUserWithEmailAndPassword} className="btn btn-primary">Register</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;