import React, { useEffect, useState } from 'react'
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';
import { Link, useNavigate } from 'react-router-dom';
import  logo from '../../public/logo-full.png'
function Navbar() {
  //to check our context api after importing it in main.jsx 
  //[authUser,setAuthUser] -> this will come from , i.e ,->import { useAuth } from '../context/AuthProvider';
  /*
  const [authUser,setAuthUser] =useAuth();
    //we will console and check what we are getting in auth user 
    console.log(authUser);
*/ // we willsue this app.jsx 
const [authUser,setAuthUser] =useAuth();
// we are getting logged in user 
//now we casn protect the course route 

  const[theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
  const element=document.documentElement;
  useEffect(() => {
  if (theme === "dark") {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark")
  } else {
    element.classList.remove("dark");
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark")

  }
}, [theme]);
  const[sticky,setSticky]=useState(false)
  useEffect(()=>{
    {/* hooks are function in react that allows us to mangae the state do change as per state , & other react features without using 
      class component , they provide a way to reuse the satteful logic across component 
      1.useState() -> It is used to manage & update , state while ,
      2.UseEffect() -> the useeffect hook is used for handling side effects during compnent mount , update & umount
      const handleScroll -> fucntion will show the changes that is the update in the state , here we have kept a empty array in our dependencies so 
      so our use effect don't get mount again & again  our window is window.scrollY>0 (in y axis)if it is so we will set sticky as true which was initialy false
      so the value of sticky was flase now vlaue of setsticky -> true will now go in sticky, else if the value of window is window.scroll<0 so we will
      keep setsticky as false , outside the handler function we will call  our handler fucntion, and also return value , now we can use 
      the [sticky] in our component also can reuse it written inside the hook we will use in main div so we wil make it {``} so we can write our js
      <div className={`w-full bg-base-200 shadow-sm py-2 fixed top-0 right-0 left-0 ${
                  sticky?"sticky-navbar shadow-md bg-base-200 duration-200 transition-all ease-in-out":""
                }`}>
                if it is stciky?-> then shadow medium background -base 200 duration - 200millioseconds  : if not then do nothing like :else ->""
      */}
    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  // we also need to bind the navbar items to our main jsx where we have route this all 
  // when its clicked over here like on course u will be redirected to the course page from the navbar
  //<li><a>Home</a></li> -> <li><a href="./">Home</a></li> for all pages
  // <li><a href='./'>Home</a></li> -> these route  home page 
  // <li><a href='./course'>Course</a></li> // these route has course, course.jsx in app.jsx and we are running this app.jsx in main.jsx as </app> component in the 
  // webrowser when we click it we will be redirected to the course
  // if we go to diff pages that means are component is rendering on route
    const navItems = (<>
        <li><a href='./'>Home</a></li> 
        <li><a href='./course'>Course</a></li> 
        <li><a href='./Contact'>Contact</a></li>
        <li><a href='./aboutUs'>AboutUs</a></li>
    </>)
    return (
        // <div>Navbar</div>
        <>
                {/* in our main div our max width is xxl and container for responsive and margin from x-axis is auto
                 and margin for medium device is mx-auto and for small device px-4 
                 w-full → the navbar background always spans the entire screen

max-w-screen-2xl → content stays centered on large displays (so it doesn’t look too wide)
mx-auto → horizontally centers the inner content
px-4 md:px-8 → gives you responsive side padding (smaller on phones, larger on desktops)
DaisyUI’s .navbar, .dropdown, .menu, etc. handle the rest of the responsiveness for your nav links and buttons
to fix nav bar and amke it sticky to move along eith pages or remain its make in navbar main div -> fixed top-0 right-0 left-0.
*/}
                <div className={`w-full py-2 fixed top-0 right-0 left-0  z-50  blue:bg-slate-900 dark-text-white${
                  sticky?"sticky-navbar shadow-md bg-blue-200 duration-200 transition-all  dark:bg-blue-900 dark-text-white ease-in-out":""
                }`}>
                     <div className='max-w-screen-2xl mx-auto px-4 md:px-8 '>
                      <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown relative z-50">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                                {/* <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>AboutUs</a></li> */}
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/" className="flex items-center gap-2 md:gap-3 cursor-pointer select-none">
  <img
    src={logo}
    alt="LegacyBooks Logo"
    className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-xl shadow-sm"
  />

  <span className="p-1 text-xl md:text-2xl font-bold whitespace-nowrap">
    LegacyBooks
  </span>
</Link>

                    </div>
                    <div className="navbar-end flex flex-wrap justify-end items-center gap-3">
                            <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {/* <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>Contact</a></li>
      <li><a>AboutUs</a></li> 
      for spaces between this items and search bar and login buttob we put space x-axis 3px in navbar parent*/
    }
                                {navItems}
                            </ul>
                            </div>
                            <div className='hidden md:block'>
                            <label className="flex items-center gap-2 px-3 py-1 border rounded-md grow outline-none">
  <svg
    className="h-[1em] opacity-50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input
    type="search"
    required
    placeholder="Search"
    className="grow outline-none bg-transparent"
  />
</label>

                            </div>
                            <label className="swap swap-rotate" >
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" 
  onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    checked={theme === "dark"}
/>
  

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
{
  //if user is login then show logout else show login , we implemented this at end after building the logout button afetr the creating context api for authuser -> which is logged in
  authUser?(<Logout></Logout> ):(<div className="">
                                {/*we remove the "navbar from here so we can merger the menu and login button 
                                so className="navbar-end" = className="" 
                                we will make chnages to bt -> bg black ,text white, rounded medium and hover - bg
                                colour slate-800 duration 300 milli secs tailwind css class*/}
                            <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                              onClick={()=>document.getElementById("my_modal_3").showModal()}>
                              {/*// this daisy ui modal on click it gets open
    // we will us id="my_modal_3 in our navbar ( beacuse login button is on navbar)
    // on click in navbar it will open login button
    // showModal() is a funtion which will open that modal and 
    // we are getting it using document.getElementById(" id in login.jsx in modal")
    // a dom method  */}
                              Login</a>
                              <Login>
                                </Login>{/* we will import login here to use it  */}
                            </div>
)}
                            
                    </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Navbar