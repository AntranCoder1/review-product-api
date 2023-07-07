import Category, { ICategory, CategoryObject } from "../models/category.model";
import mongoose, { Document, Schema, Types } from "mongoose";
export const create = async (data: CategoryObject) => {
  const newData: ICategory = new Category(data);
  return newData.save();
};

export const findAll = (subDomain: any) => {
  return Category.aggregate([
    {
      $match: {
        parentCategory: {
          $exists: false,
        },
        status: "active",
        subDomain: mongoose.Types.ObjectId(subDomain),
      },
    },
    {
      $graphLookup: {
        from: "categories",
        startWith: "$_id",
        connectFromField: "_id",
        connectToField: "parentCategory",
        depthField: "level",
        // maxDepth: 3,
        as: "childs",
      },
    },
  ]);
};

export const updateCategory = (categoryId: string, subDomain: any) => {
  return Category.updateOne({ _id: categoryId }, { subDomain: subDomain });
};

export const getOne = (categoryId: string) => {
  return Category.findOne({
    _id: categoryId,
  });
};

export const findId = (categoryId: string, subDomain: any) => {
  return Category.aggregate([
    {
      $match: {
        parentCategory: {
          $exists: false,
        },
        subDomain: mongoose.Types.ObjectId(subDomain),
        _id: mongoose.Types.ObjectId(categoryId),
      },
    },
    {
      $graphLookup: {
        from: "categories",
        startWith: "$_id",
        connectFromField: "_id",
        connectToField: "parentCategory",
        depthField: "level",
        // maxDepth: 3,
        as: "childs",
      },
    },
  ]);
};

export const deleteCategory = (categoryId: string) => {
  return Category.deleteOne({ _id: categoryId });
};

export const updateStatus = (categoryId: string, subDomain: any) => {
  return Category.updateOne(
    { _id: categoryId, subDomain: subDomain },
    { status: "inactive" }
  );
};

export const editCategory = (
  categoryId: string,
  subDomain: any,
  data: CategoryObject
) => {
  return Category.updateOne({ _id: categoryId, subDomain: subDomain }, data);
};

export const findBySlug = (slug: string) => {
  return Category.findOne({ slug: slug });
};

export const countList = () => {
  return Category.countDocuments();
};
