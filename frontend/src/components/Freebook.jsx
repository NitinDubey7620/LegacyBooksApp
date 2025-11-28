import React from 'react'
// import list from "../../public/list.json" //as were getting data from backend
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
// we have also in freebook -> where we were filtering and showing free book  using frontend list.json now we will do from backend
// now we have to do from backend using  axois in src->component->Freebook.jsx 
import axios from 'axios';
import { useState, useEffect } from "react";
import { data } from 'react-router-dom';

//we will use the same fucntion used in course just bit make adjustment for the filter data 
{/*as this is freebook will be dipalayed on the home page and all the paid book will be dispalyed on the courses where we have to login
    without authentication we can't use it 
    and we need to dispaly the data, in public list.json 
    format of json is we have multiple objects(book data) in array
    [
    {
        "id":1,
        "name":"Story Book",
        "title":"Discover a smarter way to learn — anytime, anywhere.",
        "price": 0,
        "category":"Free",
        "image":"https://www.freepik.com/free-vector/gradient-stack-books-illustration_23974764.htm#fromView=search&page=4&position=15&uuid=989667fe-f5f5-4bc7-9810-f7d9cf66790e&query=book"
    }
], we will have mulltiple such data , we have data in the json format later we will store it in the database during creation of our backend
, here as we don't have the backend so we willacess the data from here 
we will free all the free data from the public folder
import list from "../../public/list.json" go into directory get , we filter free data using javascript filter to get free data
we filter list and pass local data  , filter fucntion is a array method works or list i.e a array gives data acording to the filter
that is the conditon we have given and return that data to us 
we need card to display this data */}

// after connecting the frontend with backend we will get 
//->const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`);
         // const res = await axios.get("http://localhost:4001/book");
//replace with the backend url so we can request as we have deployed it
function Freebook() {
const [book,setBook]=useState([])
    useEffect(()=>{
      const getBook = async()=>{
        try {
          // we will call our api 
          // const res = await axios.get("http://localhost:4001/book");
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`);
          const data=res.data.filter((data)=>data.category==="Free")
          console.log(data);
          setBook(data); // it will come from setbook to our variable -> book and we can use the variable 
          //im our mapping 
        } catch (error) {
          //if there is error we throe the error in the console
          console.log(error);
        }// our api call is ready so noww we will call our function here 
      }
      getBook(); // calling our function here
    },[]);


/*
    const filterdata =list.filter((data)=>data.category==="Free")// this will keep the free data we are checking both varible and type 
    // u can check data by consoling it 
    console.log(filterdata); 
    */
    // we get filter data now we need to shos this data near homepage in a card
    // react slick slider -> go doc and install this npm install react-slick 
    // to include css with it , npm install slick-carousel --save
    // for card refer daisy ui
    /* to use the slider
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    , then go slider we want our card to be responsive
    to get slider 
    import Slider from "react-slick"; on top 
    also copy the setting fucntion 
    in setting 
    slidesToShow: 4,
    slidesToScroll: 4, 
    we chnaged to 3 so it shows three sliding card per page
    slidesToShow: 3,
    slidesToScroll: 3,
    breakpoint is part of tailwind css
     breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
} it will show 3 card for 1024 pixel and below it 600 -2 cards and device below this only 1 cardto show, go tailwind.css and check in  responsivedesign 
 breakpoibt for each pixel sm, lg , md , xl , 2xldevices ,for less than we need to generate the width
    */
// this is setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // use the slider from this repsonsive slider, from the website and paste it into the jsx 
  //there is 4 cards in a slider we want only 3 cards to dispay on our page -refer to the setting slider breakpoint
  // we need to give margin from left right so simply ADD them into our main div to resize 
  // we make cards as a separate component for our slider so we can use in main and course page as well
return (
    <>
    <div className='max-w-screen-2xl mx-auto px-4 md:px-8 '>
        <div>
            <h1 className='font-semibold text-xl pb-2 mb-4-'>Learn Without Limits — Start Your Free Journey Today</h1>
        <p>Begin your learning adventure with expert-led courses designed to inspire growth and creativity. From personal development to professional skills, LegacyBooks offers a collection of 100% free courses that empower you to learn, explore, and achieve more — anytime, anywhere.</p>
        </div>
        <div>
            <Slider {...settings}>
                {
                  //book is our updated state from -> use state
                    book.map((item)=>(
                        //we will pass this item as item -> props from cards to our Freebook we will pass key too so our value is uinique we don't
                        // get any error basis of id so it will unique always as all books our unique 
                <Cards item={item}key={item._id}/>
                    // we will pass our items as props will be received that item in <cards 
                    // here item is actually book from our json which we have filter as free for this component as we will ensure all are unique
                    ))
                }
        {/*     // we remove the div of responsive slide in freebook and will map this card for that we will use map array funtion 
        //we will use existing data ->filterdata.map along with arrow fucntion
        // we will use react props(properties) - >are way to pass data from a parent component to child component
        //props allows, component to be dynamic and flexible , once they receive diiferent data they render accordingly
        // parent component freeboook , child compoent - cards we will pass data from freebook to cards child using react props
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div> */}
      </Slider>
    </div>
     </div>
     </>
  )
}

export default Freebook