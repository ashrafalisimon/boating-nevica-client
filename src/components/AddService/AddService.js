import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url,{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    })
  };
  return (
    <div className="px-4 md:w-8/12 lg:w-5/12 mx-auto">
      <h2 className="text-5xl text-center py-12 font-bold ">
        Please Add Service!!!
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6" >
          <input 
          placeholder="Booking Name"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("name", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Price"
          type="number"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
           {...register("price")}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Feet"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("feet")}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Other text"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("other", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="BedRoom"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("bedroom")}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Guests"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("guests")}
          />
        </div>
        <div className="mb-6" >
          <textarea 
          placeholder="Description"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("description")}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Img Url"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
           {...register("img")}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Package Name"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("packageName")}
          />
        </div>
        <div className="mb-6" >
          <input 
          placeholder="Servicer Name"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("servicerName")}
          />
        </div>
       
        <div className="mb-6" >
          <input 
          placeholder="Short Description"
          type="text"
           className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            {...register("shortDescription")}
          />
        </div>
        <button
          type="submit"
          className="inline-block px-7 py-2 md:mb-12 bg-blue-400 text-xl font-extrabold hover:text-slate-800 text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-amber-400 hover:shadow-lg  transition duration-150 ease-in-out w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AddService;
