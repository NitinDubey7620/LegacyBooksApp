//we need to now work on login/resgister page 
// where user implement this fucntionality , validate user and only authentic user can visit the apge and other user can't acess it 
//very important
// create user , authenticate user , and login and log out user
// we will create model for user -> in backend -> model -> user.model.js
//we will define the user schema 
//go on postman and create new collection user 
//add -> post request

//go on postman and create new collection user 
//add -> post request
// select ->body -> select raw -> here json formart will come {}
//first data we need user name , second data we need eamil id 
//we want one value , third , to enter password of user in the database
/*
{
    "Fullname":"Nitin",
    "Email id":"nitindubey04979@gmail.com",
    "Password":"123456"
}
*/
// we want user to fill this much data during register then only he can create account
// for this we will define schema for the database 
//we are creating user schema
import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true // that means we need , dena hi hoga fullname
    },
    email:{
        type:String,
        required:true, //we need both compulasary and also email should be unique
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
})
// we will convert the schema we have defined into model ,userschema -> into model
//we want these many data in these format to store in database 
const User =mongoose.model("User",userSchema);
//jo bhi data ayegaa (userschema format jo humne define kiya hai vo jake User -> naam ke collectio nme store hojayegaa)
export default User;
//now we will define the controller

