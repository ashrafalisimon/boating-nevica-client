import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Loading from "../RequirAuth/Loading";

const Register = () => {
    const navigate =useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const location = useLocation()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth)
      let from = location.state?.from?.pathname || "/";
      let errorElement;


      if(user || user1){
          navigate(from, { replace: true });
      } 
      if(loading || loading1){
          return <Loading/>
      }
      if (error || error1) {
          errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

    const handleRegisterForm = event=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        createUserWithEmailAndPassword(email, pass);
    }
  return (
    <div className="px-4 md:w-8/12 lg:w-5/12 mx-auto">
      <h2 className="text-5xl text-center py-12 font-bold ">Please Register!!!</h2>
      <form onSubmit={handleRegisterForm}>
        <div className="mb-6">
          <input
            placeholder="Enter Your Name"
            ref={nameRef}
            type="text"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <input
            placeholder="Enter Your Email"
            ref={emailRef}
            type="email"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            ref={passRef}
            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Enter Your Password"
            required
          />
        </div>


        <button
          type="submit"
          className="inline-block px-7 py-2 bg-blue-400 text-xl font-extrabold text-slate-800 font-medium text-sm leading-snug  rounded shadow-md hover:bg-amber-400 hover:shadow-lg  transition duration-150 ease-in-out w-full"
        >
          Register
        </button>
        {errorElement}
      </form>

      <div className=" py-4 flex flex-col space-y-3">
        <span className="text-sm font-semibold">
          Have a Account Boating Nevica?{" "}
          <Link className="text-blue-400" to="/login">
            Please Login
          </Link>
        </span>
      </div>
      <div className="py-8">
        <button
          className="inline-block px-7 py-2 border-2 border-slate-600 text-xl font-extrabold text-slate-600 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg  transition duration-150 ease-in-out w-full"
          type="submit"
          onClick={()=>signInWithGoogle()}
        >
          Google Sing In
        </button>
      </div>
    </div>
  );
};

export default Register;
