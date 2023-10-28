import { useQuery,gql,useMutation,useLazyQuery } from '@apollo/client';
import React from 'react'
import { useState } from 'react';
const All_USERS=gql`
query getusers {
  users {
    id
    name
    username
    
    nationality
  }
}
`
const User_creation=gql`
mutation createUser($input: CreateUserInput!){
    createUser(input:$input){
        name
        username
        age
        nationality
    }
}
`
const User_deletion=gql`
mutation deleteUser($userId: String!){
    deleteUser(userId:$userId)   
}
`
const User_update=gql`
mutation updateUser($userId:String!,$updateUser:UpdateUserInput!){
    updateUser(userId:$userId,updateUser:$updateUser){
        
        name
        username
        age
        nationality
    }
}
`

const Get_User=gql`
query user($userId:String!) {
    user(userId:$userId) {
        id
        name
        username
        nationality
      }
}
`

const Data=()=> {
    const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
    const { data, loading, refetch } = useQuery(All_USERS);
    console.log(data?.users)
    const [createUser]=useMutation(User_creation);
    const [deleteUser]=useMutation(User_deletion);
    const [updateUser]=useMutation(User_update);
   const [fetchUser,{ data:userData}]=useLazyQuery(Get_User);
   console.log("one user data",userData)
  return (
   <>
   
   <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Nationality..."
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}
        />
        <button
          onClick={() => {
            createUser({
                variables:{

                    input:{name,username,age:Number(age),nationality}
                }
            })
            refetch();
          }}
        >
          Create User
        </button>
      </div>
      <button
          onClick={() => {
            updateUser({
                variables:{
                    userId:"653d001a692507936af07a17",
                    updateUser:{name:"newupdate",username:"newupdate123",age:20,nationality:"dubai"}
                }
            })
            refetch();
          }}
        >
          update user
        </button>
      <button
          onClick={() => {
            fetchUser({
                variables:{
                    userId:"653d001a692507936af07a17",
                    
                }
            })
            refetch();
          }}
        >
          Get user
        </button>
{data && data.users.map((user)=>(
    
    <ul key={user.id}>
    <li>{user.id}</li>
    <li>{user.name}</li>
    <li>{user.username}</li>
    <li>{user.nationality}</li>
   <button
          onClick={() => {
           
            deleteUser({variables:{userId:"65369283df7055fcfe03f0ef"}})
            refetch()
          }}
        >
          deletion User
        </button>
    </ul>
))}
    
   </>
  )
}

export default Data