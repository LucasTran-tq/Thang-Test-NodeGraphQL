import { rule } from "graphql-shield";

import { verifyToken } from "../../utils/index.js";
import { UserModel } from "../../db/models/index.js";

export const isAdmin = rule()(async (parent, args, ctx, info) => {
  const { authorization } = ctx.request.headers;
  if (!authorization) {
    return false;
  }

  const token = authorization.replace("Bearer", "").trim();

  const { userId } = verifyToken(token);

  // get role
  // if this is admin => true.
  const user = await UserModel.findByPk(userId);
  if (user.role === "admin") {
    return !!userId;
  }
  else{
    return false;
  }

  // return !!userId;
});
