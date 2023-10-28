/*import User from '../models/user.js'
export const resolvers={
 Query :{
    users:async()=>{
        console.log("users query")
        const data=await User.find()
       console.log("user are",data)
        return data
    },
    user:async(parent,args)=>{
        const userId=args.userId;
        console.log("userId is",userId)
        console.log("entered in single user")
        const userdata=await User.find({_id:userId})

        console.log("user data",userdata)
        return userdata[0]
    }

   
 },


 

Mutation:{
    createUser:async(parent,args)=>{
        const user=args.input;
        console.log(user)
        console.log("entered the create user mutation")
        const userData=new User(user)
        await userData.save()
        console.log(userData)
        return userData;
    },

    deleteUser:async(parent,args)=>{
        const userId=args.userId;
        console.log(userId)
        console.log("entered delete mutation")
       await User.findByIdAndDelete({_id:userId})
       
       console.log("user deleted")
    },
    updateUser:async(parent,args)=>{
        const userId=args.userId;
        const updatedUser=args.updateUser
        console.log("updateuser are",updatedUser)
        const user=await User.findByIdAndUpdate(userId,updatedUser,{new:true})
        console.log("newly updated user",user)
        return user
        
    }
     },
   
}
*/





import Todo from '../models/todo.js'
export const resolvers={

    Query:{
        getTodo:async()=>{
            console.log("get todo entered")
            const todoData= await Todo.find()
            console.log(" todo data",todoData)
            return todoData
        }
    },

    Mutation:{
        AddTodo:async(parent,args)=>{
            const todo=args.add;
            console.log(todo)
            const addtodo= await Todo.create({todo})
            console.log("added todo",addtodo)
            return addtodo;


        },
        DeleteTodo:async(parent,args)=>{
            const todoId=args.id;
            console.log("delete todo id",todoId)
            await Todo.findByIdAndDelete({_id:todoId})
        },
        UpdateTodo:async(parent,args)=>{
            const id=args.id;
            const todo=args.update
            const newTodo=await Todo.findByIdAndUpdate(id,{todo},{new:true})
            return newTodo
        }
    }

}