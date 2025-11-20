import React from 'react'
import { useAuth } from "../context/AuthProvider";
import toast from 'react-hot-toast';
//inside this we will implement the logout fucntionality  and design it 
//and import it in navbar 
// import Logout from './Logout';
//for implementing the logout we will use the authuser 

function Logout() {
const [authUser,setAuthUser]=useAuth(); // we have user for the context 
//we want a fucntion onclick when we click on it will logout 
//we have defined a function , in onclick -> we will define it over here 
const handlelogout=()=>{
    try {
        // we will use arrow funcand try catch block and also 
        //we will change the state 
        setAuthUser({
            //we will make user null to change the state 
            //olde user value , then we will make it null
            ...authUser,
            user:null ,// this user is that, thats coming from the context from the local storage 
            //when we are login we have user in the local storage 
            //but now as user is null so we need to remove it from local storage
        })
        localStorage.removeItem("User"); // this the same user we have in our context, we wwill use toast to display the message 
        toast.success("Logout Successfully");
        // window.location.reload(); //we are using func to prevent reload after login to view the course page
        // we need to refresh after login to view the course page , we will reload page automatically when its logged out
        setTimeout(()=>{
          window.location.reload();
          },2000) 
    } catch (err) {
        //here we we will show error if user doesn't logout using toast
        toast.error("Error : "+err);
        setTimeout(()=>{},2000)
    }
}
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handlelogout} >Logout</button> 
        {/* we have used this in navabar in login section usinf authuser -> if there is then it logged button we have user 
        data and we can logout ->  we will create here this fucntionality to make it use when user clicked 
    */}
    </div>
  )
}

export default Logout