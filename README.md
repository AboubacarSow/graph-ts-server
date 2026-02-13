# GraphQL TypeScript Server

A GraphQL API server built with Apollo Server, Express, and TypeScript for managing car data.

## Tech Stack

- **Apollo Server** - GraphQL server
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request parsing middleware

## Project Structure

```
src/
  ├── server.ts      - Apollo Server setup and Express configuration
  ├── schema.ts      - GraphQL type definitions
  ├── resolver.ts    - Query and mutation resolvers
package.json         - Dependencies and scripts
tsconfig.json        - TypeScript configuration
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the Apollo Server:
```bash
npm start
```

The server will run at `http://localhost:4000/graphql`

## API Schema

### Types

**Car**
- `id` (ID!): Unique identifier
- `carType` (String!): Type of car
- `color` (String!): Car color
- `year` (Int!): Year of manufacture

### Queries

- `getCars`: Returns a list of all cars

### Mutations

- `addCar(carType: String!, color: String!, year: Int!)`: Add a new car to the database

## Example Usage

### Query
```graphql
query {
  getCars {
    id
    carType
    color
    year
  }
}
```

### Mutation
```graphql
mutation {
  addCar(carType: "Tesla Model 3", color: "red", year: 2024) {
    id
    carType
    color
    year
  }
}
```

## License

ISC
