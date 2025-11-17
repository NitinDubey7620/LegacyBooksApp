import React from 'react'
import { Link } from 'react-router-dom'
// import { useForm, SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
function Login() {
//     // this daisy ui modal on click it gets open
//     // we will us id="my_modal_3 in our navbar ( beacuse login button is on navbar)
//     // on click in navbar it will open login button
//         // use <Login></Login> to import it so we can use login in our navbar
//             // on click in navbar it will open login button nad will use showmodal() function to show that modal 
//     // we want email , pass , login button , notresgistered , signup bt
//     // we have built these all in div using form and have given css using classname accordingly
//     // as we have built the login form now we habe signup on clicking which the route changes so make signup.jsx
//  // as we have built the login form now we habe signup on clicking which the route changes so make signup.jsx
//     // as login is on same page so we don't define route but for signup as the page changes we have too define the route
    
//     // front end work is done 


//     //now backend related part so , now we want like we enter vlaue in our login or signup should be stored
// // in the database -> we work on this 
// // -> login page
// // when we fill it in case it is empty there should be a validation that says this field is empty -> error
// // and without filling it should be submitted to when clicked on to the login 

// // for this we will use react hook form 
// // got on to the wesbite ->react hook form  , and get started 
// //Performant, flexible and extensible forms with easy-to-use validation.
// // in cmd ->npm install react-hook-form
// // in pkg.json ->    "react-hook-form": "^7.66.0",
// // after that imoprt  , login .jsx 
// //->import { useForm, SubmitHandler } from "react-hook-form"
// // in form  <form method="dialog">, in login.jsx add ->
// // <form  onSubmit={handleSubmit(onSubmit)} method="dialog"
// // we need to define the function handle submit 
// // we will copy the below variable from the react hook from website from the jsx code 
// //in input field we need this  < input type="email> </input>
//   //<{...register("exampleRequired", { required: true })} />
//   // 1.first field is email 
//   //-> email -> will be true , so email is needed without it will throw error 
//   //2. for password , same for {...register("password", { required: true })}
//   // so -> pass will be true , for validation 
//{errors.exampleRequired && <span>This field is required</span 
// using this will help form not getting submitted until that field is empty
//// {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
// this make sure u don't leave anyfield will give u a warning and login button won't be submitted
//
//now we will do same thing for register.jsx as it is 
// const {
//     register,
//     handleSubmit,
//     //watch, we don't use this 
//     formState: { errors }, // to show reports
//   } = useForm();
//   const onSubmit= (data) => console.log(data);
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
    <div>
    
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
      {/* if there is a button in form, it will close the modal ,onSubmit={handleSubmit(onSubmit)} */}
     <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
     onClick={() => document.getElementById("my_modal_3").close()}>
           X
         </Link>
    <h3 className="font-bold text-lg">Login</h3>
            {/* onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit(onSubmit)}>
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
        {...register("password", { required:true})}></input>
        {/* {...register("password", { required: true })} */}
        <br></br>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-6 ml-6' >
        <button className='text-white bg-indigo-600 border rounded-md px-3 py-1 hover:bg-indigo-700 duration-200 '
        >Login</button>
       <Link to="/Signup" className='mx-20 justify-center'> Not Registered{"?"}<span className='underline text-blue-500 cursor-pointer'>Signup</span>
      </Link>
    </div>
        </form>
  </div>
</dialog>
        </div></>
  )
}

export default Login;