// we will define the route for the our -> user when user new or old(which can't) resgisters 
import express from 'express' // we need this first to define the route 
import { signup ,login} from '../controller/user.controller.js';
// we need router over here
const router =express.Router();//we will export this router 
//here we will define our route 
// what will be our request ----> if we check in the post man -> we are sending (body) data so it will be post request
router.post("/signup",signup);
// this will have end point signup 
// the function that should run on signup -> is we have define in controller -> user.controller.js 
//we will get the function from controller -> import it  ,import { signup } from '../controller/user.controller.js ';
//we will use this signup fucntion over here 
//we will import user router from this router in index.js

//defining route for the login 
router.post("/login",login) ;// login func so we need to bring it from the controller where we have defined
// import { signup ,login} from '../controller/user.controller.js';
export default router;
