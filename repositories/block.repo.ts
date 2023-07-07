import Block, { IBlock, BlockObject } from "../models/block.model";
import mongoose, { Document, Schema, Types } from "mongoose";

export const create = async (data: BlockObject) => {
  const newData: IBlock = new Block(data);
  return newData.save();
};

export const getBlockId = (blockId: string) => {
  return Block.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(blockId),
      },
    },
    {
      $unwind: "$post",
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
  ]);
};

export const updateBlock = (blockId: string, data: any) => {
  return Block.updateOne({ _id: blockId }, data);
};

export const deleteBlock = (blockId: string) => {
  return Block.deleteOne({ _id: blockId });
};

export const deleteAllBlock = (data: any) => {
  return Block.deleteMany(data);
};

export const findAll = (data: any) => {
  let opAnd: any = [];

  opAnd.push({ $eq: ["$subDomain", mongoose.Types.ObjectId(data.subDomain)] });

  if (data.status === true) {
    opAnd.push({ $eq: ["$status", data.status] });
  }

  let aggregateQuerry: any = [];
  aggregateQuerry = [
    {
      $match: {
        $expr: { $and: opAnd },
      },
    },
  ];

  aggregateQuerry.push(
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
    }
  );
  return Block.aggregate(aggregateQuerry);

  // return Block.aggregate([
  //   {
  //     $match: {
  //       subDomain: mongoose.Types.ObjectId(data.subDomain),
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: "posts",
  //       localField: "post.postId",
  //       foreignField: "_id",
  //       as: "postlanding",
  //     },
  //   },
  // ]);
};
