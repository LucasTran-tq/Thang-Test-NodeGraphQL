import { UserActiveModel } from "../../../db/models/index.js";
import { Op } from "sequelize";

export const getUserActivesByDate = async (parent, args, context) => {
  const date = args.date;

  const startDate = new Date(date);
  const endDate = new Date(date);
  endDate.setDate(endDate.getDate() + 1);

  // console.log(startDate);
  // console.log(endDate);

  const result = await UserActiveModel.findAll({
    where: {
      date: {
        [Op.lt]: endDate,
        [Op.gt]: startDate,
      },
    },
  });

  // console.log(result);
  return result;
};

// {
//   "date": "2022-06-06"
// }