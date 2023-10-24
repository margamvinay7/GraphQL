import { Schema } from "mongoose";
import mongoose from "mongoose";
const UserSchema=new Schema({
   
    name:String,
    age:String,
    username:String,
    nationality:String,

})

 const User=mongoose.model("graphuser",UserSchema)
 export default User;