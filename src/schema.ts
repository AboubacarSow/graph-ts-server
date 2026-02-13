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
    getOne(id:ID!) : Car!
  }

  type Mutation {
    addCar(carType: String!, color: String!, year: Int!): Car!
    editCar(id:ID!, carType: String!, color: String!) : Car
    deleteCar(id: ID!): Car
  }
`;

export default schema;
