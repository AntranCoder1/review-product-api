import Page, { IPage, PageObject } from "../models/page.model";
import * as common from "../utils/common.util";
import * as pageDefault from "../utils/pageDefault";

export const getOne = (data: PageObject) => {
  return Page.findOne(data);
};

export const getMany = (data: PageObject, offset: number, limit: number) => {
  offset = offset ? offset : 0;
  limit = limit ? limit : 10;
  return Page.find(data).skip(offset).limit(limit).populate("user");
};

export const countList = (data: PageObject) => {
  return Page.countDocuments(data);
};

export const create = (data: PageObject) => {
  const newData: IPage = new Page(data);
  return newData.save();
};

export const updateOne = (_id: any, data: PageObject) => {
  return Page.updateOne({ _id }, data);
};

export const updateMany = (condition: any, data: PageObject) => {
  return Page.updateMany(condition, data);
};

export const deleteOne = (_id: any) => {
  return Page.deleteOne({ _id });
};

export const deleteMany = (data: PageObject) => {
  return Page.deleteMany(data);
};

export const createDefault = (subDomain: any, user: any) => {
  const data: any = [];
  for (let item of pageDefault.defaultPages) {
    data.push({
      title: item.title,
      slug: item.slug,
      content: item.content,
      subDomain,
      user,
    });
  }

  return Page.insertMany(data);
};
