import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT ?? "";

export const HYGRAPH_CLIENT = new GraphQLClient(HYGRAPH_ENDPOINT);
