import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto px-4 md:px-8'>
      <div className='mt-28 items-center justify-center text-center'>
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
         list.map((item)=>
        <Cards key={item.id} item={item}></Cards>)
        }
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