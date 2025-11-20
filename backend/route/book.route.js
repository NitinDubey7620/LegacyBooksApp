//we create folder route where we will define our route
//create a book.route.js
// then import express
import express from 'express'
// we will import our function getbook here from controller
import { getBook } from '../controller/book.controller.js'
//create express router
const router = express.Router();
// with help of this router we will get request for our getbook fucntion

// we get request for this url this fucntion should run 
router.get("/",getBook);

export default router; 
// go into index main file and import this router at starting 
