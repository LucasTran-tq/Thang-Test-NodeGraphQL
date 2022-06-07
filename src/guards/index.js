import { shield } from "graphql-shield";

import { isAdmin, isLogged } from './rules/index.js'

export const permissions = shield({
  Query: {
    getUser: isLogged,
    getUsers: isAdmin,
    getUserActives: isAdmin,
    getUserActivesByDate: isAdmin,
    getNewUsersByDate: isAdmin
  },
  Mutation: {
    deleteUser: isAdmin,
    addUser: isAdmin,
    updateUser: isAdmin,
    setAdmin: isLogged,
  },
});
