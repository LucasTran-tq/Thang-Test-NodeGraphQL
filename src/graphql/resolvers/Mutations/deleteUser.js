import { UserModel } from "../../../db/models/index.js";

export const deleteUser = async (parent, args, context) => {
  const result = await UserModel.findByPk(args.id);
  await UserModel.destroy({ where: { id: args.id } });
  return result;
};
