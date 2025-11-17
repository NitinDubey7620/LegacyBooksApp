import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import list from "../../public/list.json"
// we will store the course into div and will give space like min-h-screen so so the nav and footer doesnt overlaps
// it would be like other pages
// between the nav and foot we want ot show the data like paid books 
// then we want to show all the data we would include our jsion.list
function Courses() {
    // we will check whether our json data is showing after importing then consoling it
    //console.log(list)
  return (
    <>
   <Navbar></Navbar>
   <div className='min-h-screen'>
    <Course></Course>
   </div>
    <Footer></Footer>
    </>
  )
}

export default Courses