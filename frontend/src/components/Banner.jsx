import React from 'react'
import banner from '../../public/bookstorepic.jpg'
function Banner() {
  return (
<>
<div className='max-w-screen-2xl container mx-auto px-4 md:px-8 flex flex-col md:flex-row mt-20 md:mt- my-10'>
    {/* we will make banner we have divided int two part one left and one right(where image would be 
    make sure to import this in the main file app.jsx
    we divide into two part 2 flex divide both into 2 equal part and also for mobile device up and down
    for medium device 1/2 and for small device full that is up and down full 
    flex by default column and for medium and device above it it will be row  
    md:mt-32 for medium device small device mt-12*/}
    <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-25 ">
    <div className='space-y-12 m-auto'>
        <h1 className="text-4xl md:text-2xl font-bold leading-snug text-gray-900">
  Welcome to <span className="text-purple-600">LegacyBooks</span> —
  your gateway to endless learning adventures.
  <br />
  Read, explore, and evolve with our ever-growing collection of books and courses crafted
  to inspire your journey toward <span className='text-pink-600'>knowledge </span>and <span className='text-blue-600'>growth</span>.
</h1>
<p className="mt-4 mb-6 text-gray-600 text-semibold leading-relaxed">
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
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
</div>
    </div>
    <button className="btn btn-primary mt-3 mb-5">Get Started</button>
    </div>
    <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center">
    <img src={banner} className='max-w-full md:max-w-md h-auto object-contain' />
</div>
    {/*to use the iamge bring the image in the public folder and import it in app.jsx */}    </div>
    </>
  );
}

export default Banner;