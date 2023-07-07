import FeedUrl, { IFeedUrl, FeedUrlObject } from "../models/feedUrl.model";

export const create = (data: FeedUrlObject) => {
  const newData: IFeedUrl = new FeedUrl(data);
  return newData.save();
};

export const getMany = (
  filter: FeedUrlObject,
  offset: number,
  limit: number
) => {
  offset = offset ? offset : 0;
  limit = limit ? limit : 10;
  return FeedUrl.find(filter).skip(offset).limit(limit).populate("user", {
    _id: 1,
    picture: 1,
    email: 1,
    firstname: 1,
    lastname: 1,
  });
};

export const countList = (filter: FeedUrlObject) => {
  return FeedUrl.countDocuments(filter);
};

export const getOne = (filter: FeedUrlObject) => {
  return FeedUrl.findOne(filter);
};

export const updateOne = (_id: any, data: FeedUrlObject) => {
  return FeedUrl.updateOne({ _id }, data);
};

export const deleteOne = (_id: any) => {
  return FeedUrl.deleteOne({ _id });
};
