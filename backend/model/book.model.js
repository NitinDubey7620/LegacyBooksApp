//we are defining model to store data in dtabase
// for that we need , we need mongoose 

import mongoose from "mongoose";

// we are defining schema , where we will tell what all data we are sending to our database
// we are defining schema for the fields ,in front in list.json 
// we want to keep this all data in database
const bookschema =mongoose.Schema({
    name:String,
    title:String,
    price: Number,
    category:String,
    image:String,
})
// we will create model of this schema according to the field
//book -> collection name 
// name of schema , we have define the field in it in which type we will be receiving the data
const Book =mongoose.model("Book",bookschema);
// jo bhi data ayegaa is schema (bookschema) ayegaa vo ye collection (book) jake store hoga 
export default Book;