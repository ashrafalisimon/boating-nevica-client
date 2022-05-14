import axios from "axios";
import React, { useRef } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../RequirAuth/Loading";
const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location =useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
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
    const handleReset= ()=>{
      alert('Password Reset successfully!!!');
    }
    const handleLoginForm =   event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
         signInWithEmailAndPassword(email, pass);
        // const {data} = await axios.post('https://rocky-hollows-98162.herokuapp.com/login', {email});
        // localStorage.setItem("accessToken", data.accessToken);
        // navigate(from, { replace: true })

    }
  return (
    <div className="px-4 md:w-8/12 lg:w-5/12 mx-auto">
      <h2 className="text-5xl text-center py-12 font-bold ">Please Login!!!</h2>
      <form onSubmit={handleLoginForm}>
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
          Login
        </button>
        {errorElement}
      </form>

      <div className=" py-4 flex flex-col space-y-3">
        <span className="text-sm font-semibold">
          New to Boating Nevica? <Link className="text-blue-400" to="/register">Please Register</Link>
        </span>
        <span className="text-sm font-semibold">
          Forget Password?{" "}
          <button onClick={()=>handleReset()} className="btn btn-link text-dark pe-auto text-decoration-none">
            Reset Password
          </button>
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

export default Login;
