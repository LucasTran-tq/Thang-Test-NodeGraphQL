import { UserModel } from "../../../db/models/index.js";

export const updateUser = async (parent, args, context) => {
  const { id, ...rest } = args.input;

  await UserModel.update({ ...rest }, { where: { id } });
  const result = await UserModel.findByPk(id);

  return result;
};
