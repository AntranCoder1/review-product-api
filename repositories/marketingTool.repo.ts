import MarketingTool, {
  IMarketingTool,
  MarketingToolObject,
} from "../models/marketingTool.model";

export const create = (data: MarketingToolObject) => {
  const newData: IMarketingTool = new MarketingTool(data);
  return newData.save();
};

export const getMany = (
  filter: MarketingToolObject,
  offset: number,
  limit: number
) => {
  offset = offset ? offset : 0;
  limit = limit ? limit : 10;
  return MarketingTool.find(filter).skip(offset).limit(limit);
};

export const countList = (filter: MarketingToolObject) => {
  return MarketingTool.countDocuments(filter);
};

export const getOne = (filter: MarketingToolObject) => {
  return MarketingTool.findOne(filter);
};

export const updateOne = (_id: any, data: MarketingToolObject) => {
  return MarketingTool.updateOne({ _id }, data);
};

export const deleteOne = (_id: any) => {
  return MarketingTool.deleteOne({ _id });
};
