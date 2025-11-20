// after defining our schema for stroing tha data in the format we want in database we will define controller 
//we will define the fucntion
//collection name -> User , that we have defined and also its scehema in user.model.js
//import the model bcz we want data to be stored in that model
import User from '../model/user.model.js';
import bcryptjs from "bcryptjs"; // use for securing the password so no one can view in the database
export const signup = async (req,res)=>{
    // firstly we want email id ,pass and fullname 
    //we will get that data from body , this called body that we have written in the json in postman 
    /*
    {
    "Fullname":"Nitin",
    "Email id":"nitindubey04979@gmail.com",
    "Password":"123456"
    }
    */
   //we will use try catch and get data from our body 
   try {
    const {fullname,email,password}=req.body; // after gettig data
    // we will check whether user is registered already from 
    //we will find in the in our model 
    // beacuse database will be of this name only ->User ,we check in DB findOne as there wil be only one user , find through email -> will be unique
    const user = await User.findOne({email})
    //if the data coming from the body is present in the User DB collection 
    if(user){
        return res.status(400).json({message:"User alreay exists"});
    }
        // if user does't exist then we will store the user coming from the body in our D.B ->User ( as new user)
        // we will store our data in this variable ,new model name (where we want to store)

        // before we write the pass we will we hash it 
        //10 mod we can give 8 mod but 10 mod is muchmore secured
        //pass our passoword variable 
        const hashPassword= await bcryptjs.hash(password,10);
        //we will pass the hash pss 
        const createdUser = new User({
            // WHAT ALL WE WANT TO STORE 
            fullname,
            email,
            password:hashPassword,
            // password
            // we will store this and will save this data
        });
        //will get save in db  and send response then after the saving it 
            await createdUser.save();
            res.status(201).json({message:"User created Successfully",user:
                {
                    //now we are getting this data , as we have  saved in it ,  from createdUser
                    _id:createdUser._id,
                    fullname:createdUser.fullname,
                    email:createdUser.email,
                }
            });
   } catch (error) {
    console.log("Error : ",error+message)
    //res
    res.status(500).json({message:"Internal server error"})
   }
}
//now we have to define route for this -> go on the route folder ->user.route .js

//now we have to do for login ,we will define the controller in user.controller.js
//async func as we are perfoming async func 
export const login = async (req,res)=>{
    // we will vlaidate user from the database whether he is logged in already or not
    //we will use try cathcblock , this istype of promise to handle async func as we are aysnc await 
    //while login we need email and password
    //we will get email and pass from body 
    try {
        const {email,password}= req.body;//afetr getting this we will find in our data base
        const user = await User.findOne({email}) // we are using same fucntion to check as email will be unique so to check the uniqueness
        //we will compare user given pass word with the password give by user in the database 
        //when user entered pass during resgistartion it got saved and now when he login we will compare his login given pass with stored pass
        //so he can login , pass is stored in hash form in d.b we we use bcrypt js 
        const isMatch = await bcryptjs.compare(password,user.password);//compare the user pass with user stored pass user.password -> d.b pass
        // if the both pass is same the user can login 
        //w have found user and have compare the pass, ismatch is not true
        if(!user || !isMatch){
            res.status(400).json({message:"Invalid user name or password"});
        }else{
            //if the everything is right we will send the success status
            //we also send user full name and email  and id from mongo db  if success
            //here we are finding the user from the data base and storing it in user var so now we will find all imfo related to it _id :var._id.-> _id:user._id,
            res.status(200).json({message:"Login scuccessfull",user:
                {
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                }
            })
        }
    } catch (error) {
        //we will print the error in the console so we can check if we get any error
        console.log("Error",error+message);
        res.status(500).json({message:"Internal server error "})
    }
    //now we will define route for this , post request, on user.route.js
} 