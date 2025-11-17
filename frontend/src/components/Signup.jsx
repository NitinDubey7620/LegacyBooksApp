import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
 // as we have built the login form now we habe signup on clicking which the route changes so make signup.jsx
// as login is on same page so we don't define route but for signup as the page changes we have too define the route
  // we will use same modal use in login in signuo to save our time 
  // we will remove dailog as in this page we don't want to open anything 
  // change it to div , because we want atleast the id , for routing so we can target this 
  // where in navbar we have used this to target the this modal and fucntion to show this 
  // but for now for signup we will use it for the route
  //flex h-screen items-center justify-center , give it screen size and center it horizontally 
  // nd center it vertically
  // //we will add x -> back option to go back which not in signup form
  // now we use modal box as we find out that to bring these cross-> back to home functionality
  //as modal -> dailog box already has all css essentials design structures
  // in main div after the react fragment div we will remove modal from there as we don't 
  //have requirement of opeing it there as modal box like insignup 
  //and now we will route our login page i f u have account in singup page 
  // we will use onclick in link in the login  that is underline in singup to redirect to the login page
  // as we have linked the login to signup and vice versa using onclick in signup and route for login in navbar->
  //where we have use onclick to open modal and as we are routing in singup , login so no need link to route it
  // as we are using onclclick to link the login so we need login to import it -><Login></Login>
function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log("Form Submitted:", data);
      // document.getElementById("my_modal_3").close(); // close modal after submit
    };
  return (
   <>
   <div className='flex h-screen items-center justify-center'>
  <div className='w-[600px] border-gray-300 rounded-xl shadow-2xl p-5  '>
  <div className="relative p-6 rounded-xl bg-white">
      {/* if there is a button in form, it will close the modal */}
      <form onSubmit={handleSubmit(onSubmit)} method='dailog'>
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2">
      X
    </Link>
      <h3 className="font-bold text-xl">Signup</h3>
     
    <div className="mt-4">
        <span>Name</span>
        <br></br>
        <input type="text" 
        placeholder="Kindly Enter your fullname"
        className="w-80 px-3 mt-2 border rounded-md outline-none py-1"
        {...register("text", { required: true })}></input>
        {/* {...register("email", { required: true })}*/}
        <br></br>
        {errors.text && <span  className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className="mt-4">
        <span>Email</span>
        <br></br>
        <input type="email" 
        placeholder="Kindly Enter your email"
        className="w-80 px-3 mt-2 border rounded-md outline-none py-1"
        {...register("email", { required: true })}></input>
        {/* {...register("email", { required: true })}*/}
        <br></br>
        {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className="mt-6">
        <span>Password</span>
        <br></br>
        <input type="password" 
        placeholder="Enter your password"
        className="w-80 px-3 mt-2 border rounded-md outline-none py-1"
        {...register("password", { required: true })}></input>
        {/* {...register("email", { required: true })}*/}
        <br></br>
        {errors.password && <span  className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-6 ml-2 ' >
        <button type='submit' className='text-white bg-indigo-600 border rounded-md px-3 py-1 hover:bg-indigo-700 duration-200 '>Signup</button>
      <p className='text-xl'>Have account{"?"}
        <button className='underline text-blue-500 cursor-pointer'
onClick={()=>document.getElementById("my_modal_3").showModal()}>
        Login
      </button>
      <Login></Login>
      </p>
    </div>
     </form>
  </div>
  </div>
</div>
   </>
  )
}

export default Signup
