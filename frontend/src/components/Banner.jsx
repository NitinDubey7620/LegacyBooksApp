import React from 'react'
import banner from '../../public/hand-drawn-flat-design-bookmark-template.png'
import { useState, useEffect } from "react";
const quotes = [
  "A room without books is like a body without a soul.",
  "Books are a uniquely portable magic.",
  "So many books, so little time.",
  "Reading is essential for rising above the ordinary.",
  "A book is a dream you hold in your hands.",
  "A reader lives a thousand lives before he dies.",
  "Books are mirrors; you see what you already have inside.",
  "Today a reader, tomorrow a leader.",
  "There is no friend as loyal as a book.",
  "Books wash away from the soul the dust of daily life.",
  "Reading gives us someplace to go when we must stay where we are.",
  "Books are constant friends.",
  "Between the pages of a book is a lovely place to be.",
  "One book can change your life.",
  "Books let you travel without moving your feet.",
  "Reading is breathing for the mind.",
  "Books open doors to endless adventures.",
  "Reading turns ordinary moments extraordinary.",
  "Books grow your mind like nothing else.",
  "Stories help us understand ourselves."
];

// ------------------ QUOTES FADE COMPONENT ------------------
function QuotesFade() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full  py-2 mt-20">
      <p
        className={`text-center text-4xl md:text-2xl font-stretch-ultra-expanded transition-opacity duration-700 p-4 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {quotes[index]}
      </p>
    </div>
  );
}

function ImageSlider() {
  const images = [
    "/hand-drawn-flat-design-bookmark-template.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
    "/image7.png"
  ];

  const [index, setIndex] = useState(0);

  // 🔥 FIX: Preload all images before slider starts
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-80 md:h-[450px] bg-cover bg-center rounded-2xl transition-all duration-700"
      style={{
        backgroundImage: `url('${images[index]}')`
      }}
    ></div>
  );
}
function Banner() {
  return (
<>
<QuotesFade />
<div className='max-w-screen-2xl container mx-auto px-4 md:px-8 flex flex-col md:flex-row mt-20 md:mt-15 my-10'>
  
    {/* we will make banner we have divided int two part one left and one right(where image would be 
    make sure to import this in the main file app.jsx
    we divide into two part 2 flex divide both into 2 equal part and also for mobile device up and down
    for medium device 1/2 and for small device full that is up and down full 
    flex by default column and for medium and device above it it will be row  
    md:mt-32 for medium device small device mt-12*/}
    <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-25 ">
    <div className='space-y-12 m-auto'>
        <h1 className="text-4xl md:text-2xl font-bold leading-snug text-black dark:text-white">
  Welcome to <span className="text-purple-600">LegacyBooks</span> —
  your gateway to endless learning adventures.
  <br />
  Read, explore, and evolve with our ever-growing collection of books and courses crafted
  to inspire your journey toward <span className='text-pink-600'>knowledge </span>and <span className='text-blue-600'>growth</span>.
</h1>
<p className="mt-4 mb-6 text-semibold leading-relaxed text-gray-900 dark:text-white">
  At LegacyBooks, we believe learning should be simple, engaging, and limitless. 
  Our platform connects you with a curated library of books, courses, and resources 
  from trusted educators and creators — empowering you to read, learn, and grow at your own pace.
</p>
<div>
    <label className="input validator mt-3 mb-3">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mailhere@gmail.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
</div>
    </div>
    <button className="btn btn-primary mt-3 mb-5">Get Started</button>
    </div>
    {/* <img src={banner} className='max-w-full md:max-w-lg h-auto object-contain' /> */}
    <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center">
  <div className="w-full md:max-w-lg">
    <ImageSlider />
  </div>
</div>
    {/*to use the iamge bring the image in the public folder and import it in app.jsx */}    </div>
    </>
  );
}

export default Banner;