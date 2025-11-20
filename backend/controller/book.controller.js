// we will do get request 
// fisrtly we need our book from model folder
import Book from "../model/book.model.js";
// we have defined structure of our data in that model so we need it 
// create a fucntion (arrow fucntion), and define logic inside it 
export const getBook = async(req,res)=>{
    //we will use try catch as we will connect to the data base we might get issue and handle the exception
    try {
        //create a model and keep our variable , we are finding data in our model
        const book = await Book.find()// if we find data we will send the response 
        res.status(200).json(book);//200 -> status code of success ,will send that book 
        //we are communicating with our database to store data or to get data it might take time so this is asyn operation
        //so we will make our fucntion async  , so we can perfrom aysnc functions in sync way 
        // reason to use async and await 
        //we are communicating with our database to store data or to get data it might take time  so 
        //we want our fucntion to be pause until we don't get result if we can fetch data , so we will show 200 and data else we will show our error


    } catch (error) {
        console.log("Error :",error);
        res.status(500).json(error);
        // 500 -> for internal error
    }
};

// our controller is ready 
