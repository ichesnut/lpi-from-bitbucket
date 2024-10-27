
import { ApolloServer } from '@apollo/server';
//import { typeDefs, resolvers } from './schema';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from 'graphql-tag';
import memoryCache, { CacheClass } from 'memory-cache';


import { exec } from 'child_process';


// In-memory data store (you might want to use a database in a real-world scenario)
let memCache: CacheClass<string, string> = null;

// GraphQL schema
export const typeDefs = gql`
  type Query {
    treeStates: [Boolean!]!
  }

  type Mutation {
    setTreeState(treeClicked: Int!): Boolean
  }
`;

// GraphQL resolvers
export const resolvers = {
    Query: {
        treeStates: () => {
            console.log(`Received get request`);
            return memCache.get('treeStates');;
        }
    },
    Mutation: {
        setTreeState: (_, { treeClicked }: { treeClicked: number; }) => {
            let treeStates = Array(8).fill(false);
            console.log(`attempting tree ${treeClicked} -> current treestates ${JSON.stringify(treeStates)}`);
            if (treeClicked < 1 || treeClicked > 8) {
                throw new Error('Invalid tree number. Must be between 1 and 8.');
            }
            for (let i = 0; i < treeStates.length; i++) {
                if (i == treeClicked - 1) {
                    console.log(`Setting tree ${i} from ${treeStates[treeClicked - 1]} to true`);
                    treeStates[treeClicked - 1] = true;
                    console.log(`did it work? ${JSON.stringify(treeStates[i])}`);
                } else {
                    console.log(`Setting tree ${i} from ${treeStates[treeClicked - 1]} to false`);
                    treeStates[treeClicked - 1] = false;
                }
            }
            if ( treeClicked > 4 ) {
python3 -c 'import cmdtest;cmdtest.high(22)'
exec("python3 -c 'import cmdtest;cmdtest.high(22)'", (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});
            } else {
exec("python3 -c 'import cmdtest;cmdtest.low(22)'", (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});
            }
            memCache.put('treeStates', treeStates);
            console.log(`completed -> tree ${treeClicked} current treestates ${JSON.stringify(treeStates)}`);

            return true;
        },
    },
};
console.log('test');

const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
    if (!memCache) {
        console.log('initiating memcache');
        let tStates = Array(8).fill(false);
        memCache = new memoryCache.Cache();
        memCache.put('treeStates', tStates);
    }
    else {
        console.log('not initiating memcache');

    }
    const { url } = await startStandaloneServer(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
        listen: { port: 4000 },
    });
}
start();
