import { UserModel } from "../../../db/models/index.js";

export const getUsers = async (parent, args, context) => {
  const result = await UserModel.findAll();
  return result;
};
