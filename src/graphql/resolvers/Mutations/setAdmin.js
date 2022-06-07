import { UserModel } from "../../../db/models/index.js";

export const setAdmin = async (parent, args, context) => {
  const { id, key, ...rest } = args.input;

  if (key !== "KEYADMIN") {
    throw new Error("Invalid password");
  }

  await UserModel.update({ ...rest }, { where: { id } });
  const result = await UserModel.findByPk(id);

  return result;
};
