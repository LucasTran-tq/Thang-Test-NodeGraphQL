import { UserModel } from "../../../db/models/index.js";

export const addUser = async (parent, args, context) => {
  const result = await UserModel.create({ ...args.input });
  return result;
};
