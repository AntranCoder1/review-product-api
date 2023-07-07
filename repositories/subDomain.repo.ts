import SubDomain, {
  ISubDomain,
  SubDomainObject,
} from "../models/subDomain.model";
import * as common from "../utils/common.util";
import mongoose, { Document, Schema, Types } from "mongoose";

export const getOne = (data: SubDomainObject) => {
  return SubDomain.findOne(data);
};

export const getOneBySubDomainName = (data: any) => {
  return SubDomain.findOne(data).collation({ locale: "en", strength: 2 });
};

export const getMany = (data: SubDomainObject) => {
  return SubDomain.find(data).populate("nicheSite");
};

export const create = (data: SubDomainObject) => {
  const newData: ISubDomain = new SubDomain(data);
  return newData.save();
};

export const updateOne = (_id: any, data: SubDomainObject) => {
  return SubDomain.updateOne({ _id }, data);
};

export const updateMany = (condition: any, data: SubDomainObject) => {
  return SubDomain.updateMany(condition, data);
};

export const deleteOne = (_id: any) => {
  return SubDomain.deleteOne({ _id });
};

export const deleteMany = (data: any) => {
  return SubDomain.deleteMany(data);
};

export const findAllBlock = (subDomainId: string) => {
  return SubDomain.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(subDomainId),
      },
    },
    {
      $unwind: "$block",
    },
    {
      $lookup: {
        from: "blocks",
        localField: "block.blockId",
        foreignField: "_id",
        // let: { "blocks_id": "$block.blockId" },
        pipeline: [
          {
            $unwind: "$post",
          },
          {
            $lookup: {
              from: "categories",
              localField: "category",
              foreignField: "_id",
              as: "categoryBlock",
            },
          },
          {
            $lookup: {
              from: "posts",
              localField: "post.postId",
              foreignField: "_id",
              as: "postlanding",
            },
          },
          {
            $unwind: "$postlanding",
          },
        ],
        as: "block",
      },
    },
    {
      $unwind: "$block",
    },
    {
      $project: {
        _id: 1,
        block: 1,
      },
    },
  ]);
};
