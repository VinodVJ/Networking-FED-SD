import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDefs.js'
import { resolvers } from './resolvers.js';

// A schema is a collection of type definitions (hence "typeDefs")
const server = new ApolloServer( {
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer (server,
    {listen: {port: 4000},
});