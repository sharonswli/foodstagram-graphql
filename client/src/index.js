import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

// Connect to Server
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8000/graphql'
}) 
// Init Apollo Client instance
 const client = new ApolloClient({ networkInterface });

// Connect your client instance to the component tree with ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'));
registerServiceWorker();
