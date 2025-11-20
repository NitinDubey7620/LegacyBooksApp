// next click on below , Next "hello world" example , below
// from exprsss.js website after init , and installing express
// to run npm start -> will not run until in pkg.json we have not created ->  this start script 
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node index.js"
//   },
/*
-> running our code , using node server we will run this file 
(base) nitindubey@nitins-MacBook-Air backend % npm start
> legacybooksstore@1.0.0 start
> node index.js

Example app listening on port 3000 , -> output 

u can check on webrowser by typing  , running locally 
http://localhost:3000/
(we show the app.get -> request respond if we try to get for '/' home page )
on webpage -> 
->Hello World!

*/
//once have done completed api call and when we run the 'http://localhost:4001/course' we get error 
//Access to XMLHttpRequest at 'http://localhost:4001/book' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.Understand this error
//Course.jsx:45 

// we get these error because frontend in running on port:5173 and backend on port 4001 both on different port so
//CORS doesn't allow us to acess the backend data ,otherwise anyone can acess our backend data
// we will fix this CORS error 
//go on backend and install CORS
//after isntalling it ,"cors": "^2.8.5",
// we will import it in index.js file 
//it a middle ware 


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// const dotenv = require ("dotenv");
dotenv.config();//Go read the .env file and make all the key-value pairs available inside process.env.” ,loads .env values
// const express = require('express')//import express


const app = express()//create express app using express fucntion , that is  initialize express to use it 
//so we can send request and can run the server without express app we can not run server 
// const port = 3000
// our server is running on this port 


// we had created our router now using here 
import bookRoute from "./route/book.route.js";
// weare importing and storing in this variable 

// after import the name is given by us -> its actually for export 
//we will import user router from this router in index.js ( for signup ) which runs fucntion define it its controller
import userRoute from "./route/user.route.js";


app.use(cors()); // use this cors after the express intilization 
// port info is sensitive so we will make .env file . where it contains ,  Port = 4001 
// way to use it , THIS WILL RUN ON PORT 4001 BUT IF THIS PORT IS NOT AVIALBLE THAN THEY WILL THEN SERVE SERVER
// ON THIS || PORT , BYDEFAULT - 4000 (OUR APP WILL RUN ON )
// for using env we need to install env , go on dotenv npm -> npm i dotenv
////"dotenv": "^17.2.3",
// we need to import dotenv
// env file = secret values store karne ki jagah
// PORT=4000 = humne server ka port set kar diya
// process.env.PORT = Node.js ko bolo:
// “Bhai .env me jo PORT ki value hai, wo le aao.”
// const PORT = process.env.PORT || 4000;
// app.get('/', (req, res) => {
//   res.send(/*'Hello World!'*/ "Mern Project !")// to handle request 
// }) -> we don't need this

app.use(express.json()); // IMPORTANT for POST requests
//the data we are getting from the body we will parse it 

//now everytime we make any changes in our requesst handling and to reflec the response 
// we have again and again restart the noder server to solve this 
//npm install nodemon // will restart server automatically as we make changes in the file 
/*
"dependencies": {
    "express": "^5.1.0",
    "nodemon": "^3.1.11"
  }
// in script add
"start": "node index.js" ->"start": "nodemon index.js"

in ternminal ->
[nodemon] 3.1.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Example app listening on port 3000
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
*/

// port info is sensitive so we will make .env file . where it contains ,  Port = 4001 
// way to use it , THIS WILL RUN ON PORT 4001 BUT IF THIS PORT IS NOT AVIALBLE THAN THEY WILL THEN SERVE SERVER
// ON THIS || PORT , BYDEFAULT - 4000 (OUR APP WILL RUN ON )
const PORT = process.env.PORT || 4000;

// we can use import instead of require in express 
// for that in pkg.json we need to define 
// "type": "module",
// now we will replace all the require by import like we use in javascript
// now we can use import syntax 
// after mongo db setup just copy , copy connection string 
// 'mongodb://localhost:27017/'
// we will keep it in .env
// MongoDBURI = 'mongodb://localhost:27017/LegacyBooksStore'
// connection string + name of databse
//MongoDB will automatically create this database the moment you insert the first document in it.


// connect to mongodb
// we will write the code for connectivity

//we will put the database code in try catch as it is rsiky code and can cause error and also may crash server
// to prevent it from happeing 
// we need to bring the uri value using env.process.variable , will bring it value over here const uri = value
// const MongoDBURI = process.env.MongoDBURI;
const URI = process.env.MongoDBURI;

//we will use mongoose 
//npm i mongoose ,  "mongoose": "^8.20.0",
// in this moongse there is connect method using which we will connect
//import it 
try{
    // we don't need this parameter if we are using cloud -> mongo db atlas 
    //as we are using db locally using monogdb compass , we need poarameter due to dependencies
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    // we will put message after this 
    console.log("Connected to mongoDB");
}
// in case of error
catch(error){
    console.log("Error",error);
}
// save this and start the server -> npm start
//Connected to mongoDB , sucessfully connected to the mongodb->  also our ->sever is running
//Server app listening on port 4001
// split the terminal to run backend on one side and frontend on another sidenpm r in

//afte connecting to database we wil define the routes 
app.use("/book",bookRoute); // /book route pe bookRoute dike
app.use("/users",userRoute); //we will define the user route for signup
//as we save this a collection will be created in db under legacybookstore


app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)//to listen port , to run the node.js app 
})