import { gql } from '@apollo/client';
// In-memory data store (you might want to use a database in a real-world scenario)
let treeStates = Array(8).fill(false);
// GraphQL schema
export const typeDefs = gql `
  type Query {
    treeStates: [Boolean!]!
  }

  type Mutation {
    setTreeState(treeNumber: Int!, newState: Boolean!): Boolean
  }
`;
// GraphQL resolvers
export const resolvers = {
    Query: {
        treeStates: () => treeStates,
    },
    Mutation: {
        setTreeState: (_, { treeNumber, newState }) => {
            if (treeNumber < 1 || treeNumber > 8) {
                throw new Error('Invalid tree number. Must be between 1 and 8.');
            }
            treeStates[treeNumber - 1] = newState;
            return newState;
        },
    },
};
