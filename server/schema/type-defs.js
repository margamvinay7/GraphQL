
import { gql } from "apollo-server-express"
 export const typeDefs=gql`
type User {
    id:ID!
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
    updateUser(UpdateUser:UpdateUserInput):User
}
`


