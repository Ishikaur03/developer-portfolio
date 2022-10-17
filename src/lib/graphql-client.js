/*import { GraphQLClient } from 'graphql-request'
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API

export const client = new GraphQLClient(GRAPHQL_ENDPOINT)*/
import { GraphQLClient } from 'graphql-request'
const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT
export const client = new GraphQLClient(HYGRAPH_ENDPOINT)