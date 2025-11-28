import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
// for backend url 
  //as we have connected the frontend with the backend so we will replace the , backend api url with
// await axios
//   .post(`${import.meta.env.VITE_BACKEND_URL}/users/signup`, userInfo)



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
  const location=useLocation();//we want location that our page is now on which location, we will get it from react router dom
  //we will define the location , a variable  ,hume vo path do otherwose we sill provide alternate path home page 
  const navigate =useNavigate();
  const from=location.state?.from?.pathname || "/"
 // we have got this to use this we will use navigate , where toast gets success we will naivigate it to hompage 
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit =async (data) => {
      // this data contains email , name as pass , we can check it by printing it thats why data
      //we are  taking field as fullanme so we will use the name -< fullname
      const userInfo ={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      };
      //we want to store this data in the backend so we are calling api , post request as we have made post request -> check in the backend or postman
      //we will use axios 
      //we need to give endpoint -> url 
      //at his url we want to store the userInfo 
      //and we we will use then and catch , in then we get response with arrow function
      // await axios.post("http://localhost:4001/users/signup",userInfo)
      await axios
  .post(`${import.meta.env.VITE_BACKEND_URL}/users/signup`, userInfo)
      .then((res)=>{
        // we will console log the response we are getting
        console.log(res.data);
        //we will use if -> if we have r
        //resposne data the we will do the signup and show message 
        if(res.data){
          // alert("Signup Successfull"); // we will use toast
          toast.success('Signup Successfull!');
          //to navigate to home page as we signup successfully and we can show the state as logout
          navigate(from,{replace:true});
        }// if we don't response we will make catch , in catch we handle error ,we will have error we will handle in catch 

        // if we enter the new user data , the user will be created successfully ,signup done and 
//we want the data of user to be stored on local storage , console->application->local storage -> key :value 
//beaucse we want the course route to be showed to authentic user , without user our -> course route shouldn't be opeing 
//course is part of navbar and we have define its route in app component , so we can use the data of this component 
//we want it to be store in local storage 
//users ->variable name
      localStorage.setItem("User",JSON.stringify(res.data.user)); // this will store tha data on webrowsers local storage
      }).catch((err)=>{
        // to see on console we can just print it 
        //we will make fucn aysnc ->because we are calling api
        //we will call api and will wait for it to be executed once we get res we will handle it by ,then and if we get error we will run .catch
        // this is like promise either we gtw  res ->successfull or err->reject 
        // console.log(err)
        // alert("Signup Error : "+err);
        /*
        when we try to login with samecredentials -> we get alert ->Signup Error : AxiosError: Request failed with status code 400
in network ->for that request ->{"message":"User alreay exists"}
//when we try to login with same data
//beacuse error weare not understanding whether user exists or not so we will send it as respsonse it user exit , do it in user.controller.js 
//for signup -> if (user exists) part -> show this resposne ->{"message":"User alreay exists"}
// so instead of showing error we will show the in if condtion ->{"message":"User alreay exists"}
        */
       if(err.response){
         console.log(err)
        // alert("Signup Error : "+err.response.data.message);// we will use toast
        toast.error('Signup Error : '+err.response.data.message);
       }
      });


      // document.getElementById("my_modal_3").close(); // close modal after submit
    };
  return (
   <>
   <div className='flex h-screen items-center justify-center'>
  <div className='w-[600px] border-gray-300 rounded-xl shadow-2xl p-5  '>
  <div className="relative p-6 rounded-xl bg-whitedark-text-white">
      {/* if there is a button in form, it will close the modal */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-4 top-2">
      X
    </Link>
      <h3 className="font-bold text-xl">Signup</h3>
     
    <div className="mt-4">
        <span>Fullname</span>
        <br></br>
        <input type="text" 
        placeholder="Kindly Enter your fullname"
        className="w-80 px-3 mt-2 border rounded-md outline-none py-1"
        {...register("fullname", { required: true })}></input>
        {/* {...register("email", { required: true })}*/}
        <br></br>
        {errors.fullname && <span  className='text-sm text-red-500'>This field is required</span>}
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
      <div className='text-xl'>Have account{"?"}
        <button className='underline text-blue-500 cursor-pointer'
onClick={()=>document.getElementById("my_modal_3").showModal()}>
        Login
      </button>
      </div>
    </div>
     </form>
     <Login></Login>
  </div>
  </div>
</div>
   </>
  )
}

export default Signup
