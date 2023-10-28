import React from 'react'
import { useState } from 'react'
import { useQuery,gql,useMutation,useLazyQuery } from '@apollo/client';
import {  FaTrashCan,FaPenToSquare,FaThumbsUp} from "react-icons/fa6";
import {  IoSend} from "react-icons/io5";

const All_Todos=gql`
query getTodos {
  getTodo {
    id
   todo
  }
}
`

const Add_Todo=gql`
mutation addtodo($add:String){
  AddTodo(add:$add){
    id
    todo
  }
}

`

const Delete_Todo=gql`
mutation DeleteTodo($id: String){
    DeleteTodo(id:$id)   
}
`
const Todo = ({}) => {

  const {data,refetch}=useQuery(All_Todos)
  console.log("fetched data",data)
  const [AddTodo]=useMutation(Add_Todo)
  const [DeleteTodo]=useMutation(Delete_Todo)
  const [todo,setTodo]=useState(" ")
  const handleClick=()=>{
      AddTodo({variables:{
        add:todo
      }})
      refetch();
      setTodo("")
      
  }

  // const handleDelete=()=>{
  //   console.log("entered handle delete")
  //     DeleteTodo({
  //       variables:{
  //         id:todo?.id
  //       }
  //     })
  // }
  return (
   <>
<h1 className='nav'>Todo App</h1>

   <div className='container'> 
    <h2 className='header'>Enter Todo To Add</h2>
    <input value={todo} className='input1' onChange={(e)=>setTodo(e.target.value)}  placeholder="enter Todo"/>
    <div onClick={handleClick} className='btn'><IoSend/></div>
   </div>
   <hr className='hr'/>
   <div className='text'>Todo's</div>
   <hr className='hr'/>
   {data && data.getTodo.map((todo)=>(
       <div className='todoCard'>
       <div className='todoText' >{todo.todo}</div>
       <div className='icon' onClick={()=>{
        DeleteTodo({
          variables:{
            id:todo?.id
          }
        })
        refetch()
       }}><FaTrashCan/></div>
      </div>
   ))}
  
   </>
  )
}

export default Todo