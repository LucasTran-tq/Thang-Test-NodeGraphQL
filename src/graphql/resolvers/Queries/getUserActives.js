import { UserActiveModel } from "../../../db/models/index.js";

export const getUserActives = async (parent, args, context) => {
  const result = await UserActiveModel.findAll();

  // console.log(result);
  return result;
};
