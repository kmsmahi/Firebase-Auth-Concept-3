import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FireBase/FireBase.config';
import { NavLink } from 'react-router';
const Register = () => {
    const registerFormHandler=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log('after register : ',email,password);
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => { 
        console.log(result.user);
  })
        .catch((error) => {
        console.log(error.message);
  });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={registerFormHandler} action="">
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div>
            <label class="label">
            <input type="checkbox" class="checkbox" />
            Accepts our terms and conditions
            </label>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='mt-4 text-sm'>Already have an account?Then,<NavLink className='text-blue-500 underline' to='/login'>Login</NavLink></p>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;