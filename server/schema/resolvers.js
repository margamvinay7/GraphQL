import User from '../models/user.js'
export const resolvers={
 Query :{
    users:async()=>{
        console.log("users query")
        const data=await User.find()
       console.log("user are",data)
        return data
    },

   
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
       return `${userId} user deleted`
       console.log("user deleted")
    }
     },
   
}