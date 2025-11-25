// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import React from 'react';
//as we have route all the pages so import the route after installing it
import Home from './assets/home/Home';
import { Routes, Route, Navigate } from "react-router-dom"
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
//after this we will keep our home and all other component in the different route
/*
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/footer';
import Freebook from './components/Freebook';
import Home from './assets/home/Home';
*/
// as we have all these in home component as this is part of the home so jsut import home in jsx

 // as we have built the login form now we habe signup on clicking which the route changes so make signup.jsx
// as login is on same page so we don't define route but for signup as the page changes we have too define the route
//    <Route path='/signup' element={<Signup></Signup>} ,this will import signup
function App() {
    const [authUser,setAuthUser] =useAuth();
    //we will console and check what we are getting in auth user 
    // we will use our context api that we have defined
  //for tailwind css we use classname , atrribute
  return (
  //   <div>App
  //     <h1 class="text-3xl font-bold underline"> 
  //       {/* to check whether our tailwind css is working or not */}
  //   Hello world!
  // </h1>
  //   </div>
  // now we will route and will have our route
  // we route  path="/" ->path -> the page we want to render we want to render home compnent so write it
  // component -> in our element={</home>} -> we want ./ to be rendered as home component like 
  //http://localhost:5173/ -> ./ ->home page 
  //localhost:5173/course -> /courses -> course page 
  //will be routed to signup jsx using <link to='signup">signup</link> after routing it 
  
  <>
  <div>
    <Routes>
    <Route path="/" element={<Home></Home>}/>
   {/*} <Route path="/course" element={<Courses></Courses>}/> // this our course route we have protect this */}
<Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />}/>   
 {/*if there is authuser show this course component else naviagte to signup page 
    navigate is in our react router dom ->we use this navigate to differernt route */}
    <Route path='/signup' element={<Signup></Signup>}/>
  </Routes>
  <Toaster></Toaster>
  </div>
  {/*<Home></Home>
  <Course></Course>*/}
  
  {/* <Navbar></Navbar>
  <Banner></Banner>
  <Freebook></Freebook>
  <Footer></Footer> 
  as building app we build all this pages and added directly to our app , but as far we know bydeafult 
  we are in our homepage and we have component of our app.jsx like courses,aboutus,contact -> so we have to add 
  these all to our main app.jsx so all these nav, banner,freecourse, footer is is our home page and 
  we want to display now each page from home to contact us as a separate page and also route them, so when we click
  on to those page present on our home page as well as other pages too on our app.jsx on click then they take us to 
  exact courses page 
  now as we have separate home component -> home.jsx */}
  </>
  )
}
//if this doesn't gets run that -> we need to remove strict mode from main.jsx 
// beacuse due to strict mode in jsx it render two times so just remove it 
export default App
