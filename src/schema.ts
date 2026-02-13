import { gql } from 'graphql-tag';

const schema = gql`
  type Car {
    id: ID!
    carType: String!
    color: String!
    year: Int!
  }

  type Query {
    getCars: [Car!]!
  }

  type Mutation {
    addCar(carType: String!, color: String!, year: Int!): Car!
  }
`;

export default schema;
