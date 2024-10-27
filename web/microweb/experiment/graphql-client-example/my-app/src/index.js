
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'http://192.168.8.126:4000/',
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetChannels {
//         channels {
//           state
//           number
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(JSON.stringify(result)));

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
