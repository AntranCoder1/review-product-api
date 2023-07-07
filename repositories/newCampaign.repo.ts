import NewCampaign, {
  INewCampaign,
  NewCampaignObject,
} from "../models/newCampaign.model";
import * as common from "../utils/common.util";

export const getOne = (data: NewCampaignObject) => {
  return NewCampaign.findOne(data);
};

export const getMany = (
  data: NewCampaignObject,
  offset: number,
  limit: number
) => {
  offset = offset ? offset : 0;
  limit = limit ? limit : 10;
  return NewCampaign.find(data).skip(offset).limit(limit);
};

export const create = (data: NewCampaignObject) => {
  const newData: INewCampaign = new NewCampaign(data);
  return newData.save();
};

export const updateOne = (_id: any, data) => {
  return NewCampaign.updateOne({ _id }, data);
};

export const updateMany = (condition: any, data) => {
  return NewCampaign.updateMany(condition, data);
};

export const deleteOne = (_id: any) => {
  return NewCampaign.deleteOne({ _id });
};

export const deleteMany = (data: any) => {
  return NewCampaign.deleteMany(data);
};
