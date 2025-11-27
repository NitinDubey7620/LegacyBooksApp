import React, { useState,useEffect } from 'react'
// import list from "../../public/list.json" 
// we getting our data from here , now we don't need it as we have made a backend and connect with the database 
//after creating the schema, for the databse and after connection we have imported the data

//we call our api in frontend -> to communicate with api in frontend we use javascript library [ axois] 
//we used it to send and recieve http request
// install axios it in front end -> npm i axios
// after it has got installed , we call our backend api 
//for that we define state first 
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'
import.meta.env.VITE_BACKEND_URL

//as we have connected the frontend with the backend so we will replace the 
// the backed api url , axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`)
function Course() {
  //backend -> api call from frontend to our api we created at backend -> to get request -> to get the data->book
  //a variable and fucntion set book  , it will come from usestate (will get imported)
  // in starting it will be empty array if there is no data
  //we will use -> useEffect , now we will call our api for the data
  // we will pass empty array in useEffect so it runs only one time 
  // we will make fucntion and it will be a sync function as we are requesting from the backend funtion
  //we will use try catch block
  // we call our api -> import axois 
  // axois.get(api's url , i.e endpoint ) ( request because the api that we have made is get request)
  // our url -> go on postman and copy url for which we used for checking our api ->http://localhost:4001/book
  // we will use await , async - await -> is a async func that , we we get request and its taking time so it wil hold
  // until the repsonse comes (wait) and if response comes we will res success response else show  -> error 
  //store in res variable 
  // we see our data , response.data
  // we will also change our state keep our data in ,setBook(res.data)
  // we don't need list.json -> now our data is in book-> we are getting using the function 
  //we need to map with book instead of list
  // we will run this and check whether data is coming or not 
  //on course route , http://localhost:5173/course
  const [book,setBook]=useState([])
    useEffect(()=>{
      const getBook = async()=>{
        try {
          // we will call our api 
          // const res = await axios.get("http://localhost:4001/book");
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`)
          console.log(res.data);
          setBook(res.data); // it will come from setbook to our variable -> book and we can use the variable 
          //im our mapping 
        } catch (error) {
          //if there is error we throe the error in the console
          console.log(error);
        }// our api call is ready so noww we will call our function here 
      }
      getBook(); // calling our function here
    },[])
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 mt-20
        w-full bg-cover bg-center
        bg-[url('/heroimage-white.jpg')]
        dark:bg-[url('/heroimage-dark.jpg')]
      ">
    <div className='max-w-screen-2xl mx-auto px-4 md:px-28 pt-25'>
      <div className='items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md-text-4xl'><span className='text-blue-500'>Learn</span>, grow, and <span className='text-pink-500'>master </span> new skills with our <span className='text-violet-600'>curated</span> selection of courses<span className='text-green-500' >{" :)"}
</span>
</h1>
<p className='text-xlfont-md md-text-2xl mt-12  ml-2.5 mr-2.5 text-justify '>Discover a world of knowledge with our curated collection of learning books and courses. Whether you’re looking for free resources to get started or premium guides to master advanced topics, we’ve got something for everyone. From programming and design to business and personal growth — each book is carefully selected to help you learn, grow, and achieve your goals at your own pace. Start exploring today and take the next step in your learning journey!</p>
<Link to="/">
<button className='bg-indigo-500 items-enter text-white px-4 py-2 rounded-md hover:bg-indigo-700 duration-300 mt-6'>Back</button>
</Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
  //we need to map with book instead of list
        //  list.map((item)=>
          book.map((item)=>
        <Cards key={item._id} item={item}></Cards>)
        }
      </div>
      </div>
      </div>
      </>
  )
}
/*
after that we will get ready our courses page , where we have ttile, para and button after that we have to 
render the books .. as we have course.jsx which we are using int the courses.jsx main course section as after 
nav
course
footer
/ we alredy have list.json all book so how we want it to be in course so we can render it in the courses.jsx 
create a main div in course and we will map data over there 
*/
export default Course;