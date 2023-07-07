import Automation, {
  IAutomation,
  AutomationObject,
} from "../models/automation.model";
import * as userRepo from "./user.repo";
import * as constValue from "../utils/constValue";

export const create = async (data: AutomationObject) => {
  const canPermission_automation = await userRepo.checkPermission(
    data.user,
    constValue.permission.AutomationIsTurnedON
  );
  if (!canPermission_automation) {
    throw { message: "Method not allow" };
  }
  const newData: IAutomation = new Automation(data);
  return newData.save();
};

export const getMany = (
  filter: AutomationObject,
  offset: number,
  limit: number
) => {
  offset = offset ? offset : 0;
  limit = limit ? limit : 10;
  return Automation.find(filter).skip(offset).limit(limit);
};

export const countList = (filter: AutomationObject) => {
  return Automation.countDocuments(filter);
};

export const getOne = (filter: AutomationObject) => {
  return Automation.findOne(filter);
};

export const updateOne = (_id: any, data) => {
  return Automation.updateOne({ _id }, data);
};

export const deleteOne = (_id: any) => {
  return Automation.deleteOne({ _id });
};

export const getAll = () => {
  return Automation.find({ status: true });
};
