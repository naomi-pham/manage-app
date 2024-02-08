import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT ?? "";

export const HYGRAPH_CLIENT = new GraphQLClient(HYGRAPH_ENDPOINT);
