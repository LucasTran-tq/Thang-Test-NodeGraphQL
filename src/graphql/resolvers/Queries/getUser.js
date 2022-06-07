import { UserModel } from "../../../db/models/index.js";

export const getUser = async (parent, args, context) => {
  const result = await UserModel.findByPk(args.id);
  return result;
};
