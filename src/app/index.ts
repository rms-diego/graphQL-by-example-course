import 'dotenv/config';
import { ApolloServer } from '@apollo/server';

const typeDefs = `#graphql
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'hello world!',
  },
};

export const server = new ApolloServer({ typeDefs, resolvers });
