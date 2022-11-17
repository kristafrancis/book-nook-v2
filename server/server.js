const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection')
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers, 
    context: authMiddleware
  });
  

const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// commenting out to use apollo server for test
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build'));
});


const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    if (process.env.NODE.ENV === 'production') {
      app.use(express.static(path.join(_dirname, '../client/build')));
    }

    db.once('open', () => {
        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
 }

  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);