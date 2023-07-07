import mongoose from "mongoose";
import ParentCategory, {
  IParentCategory,
  ParentCategoryObject,
} from "../models/parentCategory.model";

export const createParent = async (data: ParentCategoryObject) => {
  const newData: IParentCategory = new ParentCategory(data);
  return newData.save();
};

export const updateParent = async (parentCategory: any, category: any) => {
  return ParentCategory.updateOne(
    { _id: parentCategory },
    {
      $push: {
        category: {
          $each: [category],
          $position: 1,
        },
      },
    }
  );
};

export const findAll = (subDomain: any) => {
  return ParentCategory.aggregate([
    {
      $match: {
        $expr: {
          $and: [{ $eq: ["$subDomain", mongoose.Types.ObjectId(subDomain)] }],
        },
      },
    },
    {
      $lookup: {
        from: "categories",
        let: { parent_id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$parent_id", "$parentCategory"],
              },
            },
          },
        ],
        as: "categories",
      },
    },
  ]);
};
