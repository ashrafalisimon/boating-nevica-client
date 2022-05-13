import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const handleRegisterForm = event=>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(name, email, pass);
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
        >
          Google Sing In
        </button>
      </div>
    </div>
  );
};

export default Register;
