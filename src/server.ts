import { ApolloServer } from '@apollo/server'
import express from 'express'
import cors from 'cors'
import http from 'http'
import {expressMiddleware} from '@as-integrations/express4'
import schema from './schema'
import resolvers from './resolver'



async function startAppolloServer(schema: any, resolvers: any) {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs:schema,
        resolvers,
        //
        //plugins:[ApolloServerPluginDrainHttpServer({ httpServer })]
    }) as any

    await server.start();
    app.use(cors())
    app.use(express.json())
    app.use(
        '/graphql',
        expressMiddleware(server)
    );

    await new Promise<void>((resolve)=> 
        httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
startAppolloServer(schema,resolvers)