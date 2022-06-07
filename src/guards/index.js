import { shield } from "graphql-shield";

import { isAuthorized } from './rules/index.js'

export const permissions = shield({
  Query: {
    // getUser: isAuthorized,
    // getDog: isAuthorized,
    getUsers: isAuthorized,
    getDogs: isAuthorized,
    getUserActives: isAuthorized,
    getUserActivesByDate: isAuthorized,
    getNewUsersByDate: isAuthorized
  },
  Mutation: {
    deleteDog: isAuthorized,
    addDog: isAuthorized,
    updateDog: isAuthorized,
  },
});
