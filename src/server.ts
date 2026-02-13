import { ApolloServer } from '@apollo/server'
import express from 'express'
import cors from 'cors'
import {expressMiddleware} from '@as-integrations/express4'
import bodyParser from 'body-parser';
import schema from './schema'
import resolvers from './resolver'



async function startAppolloServer(schema: any, resolvers: any) {
    const app = express()
    const server = new ApolloServer({
        typeDefs:schema,
        resolvers,
        //
        //plugins:[ApolloServerPluginDrainHttpServer({ httpServer })]
    }) as any

    await server.start();
    app.use(
        '/graphql',
        cors(),
        bodyParser.json(),
        expressMiddleware(server)
    );

    app.listen(4000, () => {
        console.log('🚀 Server running at http://localhost:4000/graphql');
    });
}
startAppolloServer(schema,resolvers)