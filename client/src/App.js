
import './App.css';
import { useState } from 'react';

import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client'
import Data from './data'
import UserDetails from './components/UserDetails';
import Todo from './components/Todo';
function App() {
 
  const client=new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/graphql"
  });
  return (
    <ApolloProvider client={client}>
    
     
     <Todo/>
    </ApolloProvider>
  );
}

export default App;
