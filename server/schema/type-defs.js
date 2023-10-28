
/*import { gql } from "apollo-server-express"
 export const typeDefs=gql`
type User {
    id:ID
    name:String
    age:Int
   
    username:String
    nationality:String
}

type Movie {
    id: ID!,
      name: String!,
      yearOfPublication: Int!,
      isInTheaters: Boolean,
}

type Query {
    users:[User]
    movies:[Movie]!
    user(userId:String!):User
}

input CreateUserInput {
    name:String!
    username:String!
    age:Int!
    nationality:String!
}
input UpdateUserInput {
    name:String
    username:String
    age:Int
    nationality:String
}
type Mutation {
    createUser(input:CreateUserInput!):User
    deleteUser(userId:String!):String
    updateUser(userId:String!,updateUser:UpdateUserInput!):User
}
`
*/

import { gql } from "apollo-server-express"
export const typeDefs=gql`
type Todo{
    id:String
    todo:String
}

type Query {
    getTodo:[Todo]
}


type Mutation {
    AddTodo(add:String):Todo
    DeleteTodo(id:String):String
    UpdateTodo(id:String,update:String):Todo
}
`