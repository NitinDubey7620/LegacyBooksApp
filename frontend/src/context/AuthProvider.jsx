import React, { createContext, useContext, useState } from 'react'
import { Children } from 'react';

// to create context ,name ,AuthContext ,to create context ->createContext() -> available in react
export const AuthContext = createContext()

//we will first provide children - >in this other compo will come like app.jsx ,navbar.jsx ,banner.jsx this are children
// in all this we can use our context , thats why we are passing it as children
export default function AuthProvider({children}){
    //first work is to bring user from the local storage to bring in our context for that we will we will sue var 
    const initialAuthUser=localStorage.getItem("User"); // in our var we have got localstorage user 
    // now we will manage state, a [variable and function ]
    //we are using useSate to manage the state , user is getting loggin , logged, according to this we will keep the state ,
    //  only the user is logged in we will keep his info and will change the state accordingly, thats why we need to manage the state 
    const [authUser, setAuthUser]=useState(
        //in usestate we will do , if initialAuthUser is there then parse otherwise keep it undefined
        initialAuthUser?JSON.parse(initialAuthUser):undefined,
    );
    //know we will return authcontex
    return(
        <AuthContext.Provider value={[authUser,setAuthUser]}> 
{        /*w e need to return in form of array and not obj*/
}            {children}
        </AuthContext.Provider>
    )
};
//we are creating our own hook 
// using this useAuth-> hook , we will use {authUser,setAuthUser}}
export const useAuth=()=>useContext(AuthContext); // AuthContext-> const that we have created to use it we will pass it over here

// our context api ready we want our user to be accessed globally everwhere 
//we have to wrap our context in main.jsx