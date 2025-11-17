import React from 'react'
import image from '../../public/banner.jpg'
function Cards({item}) { // we will recive the book after map fucntion  as item here 
    // check whether we recieved the item 
    // console.log(items);
    //here we will keep our responsive cards -> we will recieve the data and show the data
    // use cards from diasy ui
    // <> is react fragmentation
    // we remove the div of responsive slide in freebook and will map this card
    // filterdata.map((item)=>{
    //                         //we will pass this item as item -> props from cards to our Freebook we will pass key too so our value is uinique we don't
    //                         // get any error basis of id so it will unique always as all books our unique 
    //                 <Cards item={item} key={item.id}/>
    //                     })
    // we will pass our items as props will be received as item in cards part 
    //w-width
  return (
    <>
    <div className='mt-4 my-4 p-3 flex justify-center items-center'>
  <div className="card bg-base-100 w-120 shadow-lg rounded-lg hover:scale-105 duration-200
  flex flex-col justify-between h-[380px]">
  <figure>
    <img src={image}
      // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    // for iamge we will use item.image name in src
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary bg-green-600 border-amber-100">{item.category}</div>
    </h2>
    <p>A {item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">₹ {item.price}</div>
      <div className="badge badge-outline text-black bg-white 
hover:bg-blue-600 hover:text-white 
active:bg-blue-700 active:text-white 
transition-all duration-300 cursor-pointer border-[2x] rounded-lg px-2 py-1">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards;