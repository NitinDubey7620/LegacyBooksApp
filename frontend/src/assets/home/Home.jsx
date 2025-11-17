import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Freebook from '../../components/Freebook'
// as we have home as spearate so all this will be in our homepage 
// as we have home as spearate part sos now we will add the just home page
function Home() {
  return (
    <>
  <Navbar></Navbar>
  <Banner></Banner>
  <Freebook></Freebook>
 <Footer></Footer>
    </>
  )
};

export default Home

{/*
    so for each page we need to decide the route 
// for that we will create component course.jsx in our componnet
 after this it will not show as we haven't bind it in our app.jsx
-> as we know that we are in home page so we will 

import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/footer';
import Freebook from './components/Freebook';

function App() {
  //for tailwind css we use classname , atrribute
  return (
  <>
  <Navbar></Navbar>
  <Banner></Banner>
  <Freebook></Freebook>
  <Footer></Footer>
  </>
  )
}
-> all this is part of home page -> (./)
//we will create a folder in src -> homepage -> under it componenet as Home.jsx
// now bring all the above comoponent here in home.jsx like -> 
<>
  <Navbar></Navbar>
  <Banner></Banner>
  <Freebook></Freebook>
  <Footer></Footer>
  </>
  
  ->also there imports
  */}