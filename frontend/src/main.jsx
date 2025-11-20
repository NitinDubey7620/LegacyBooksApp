import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'

/*
<React.StrictMode>
</app>
</React.StrictMode>
*/
//as we have route all the pages so import the route after installing it
//import { Routes } from "react-router-dom"

  // now we will route and will have our route
  // we route  path="/" ->path -> the page we want to render we want to render home compnent so write it
  // component -> in our element={</home>} -> we want ./ to be rendered as home component like 
  //http://localhost:5173/ -> ./ ->home page 
  //localhost:5173/course -> /courses -> course page 
/*
  <>
  <Routes>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/course" element={<Course></Course>}/>
  </Routes>
  */

// if after routing the compoent if doesn't shows 
//if this doesn't gets run that -> we need to remove strict mode from main.jsx 
// beacuse due to strict mode in jsx it render two times so just remove it

// in main page after removing srtrict 
/*
<React.StrictMode>
</app>
</React.StrictMode

// we will use browser route 
//in main.jsx to render our root element -> app.jsx
*/
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthProvider>
<div>
 {/* our context api ready we want our user to be accessed globally everwhere 
  we have to wrap our context in main.jsx
we will keep our app in main.jsx inside the AuthProvider , that we have created , it wil get imported */}
  <App></App>
</div>
</AuthProvider>
</BrowserRouter>
  
);
