import { Schema } from "mongoose";
import mongoose from "mongoose";
const TodoSchema=new Schema({
   
    todo:String

})

 const Todo=mongoose.model("todos",TodoSchema)
 export default Todo;