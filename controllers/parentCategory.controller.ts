import { ICategory } from "./../models/category.model";
import { Request, Response } from "express";
import * as parentCategoryRepo from "../repositories/parentCategory.repo";
import * as categoryRepo from "../repositories/Category.repo";
import mongoose, { Schema, Document } from "mongoose";
import * as constValue from "../utils/constValue";

export const create = async (req: Request, res: Response) => {
  try {
    const newParentCategory = await parentCategoryRepo.createParent({
      name: req.body.name,
      subDomain: req.body.subDomain,
    });

    res
      .status(200)
      .json({ data: "Post has been created", _id: newParentCategory._id });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

interface ParentCategoryWithChildren {
  _id: string;
  name: string;
  subDomain: Schema.Types.ObjectId;
  catId: ICategory[];
}

export const getAllParentCategory = async (req: Request, res: Response) => {
  try {
    const subDomain = req.body.subDomain;

    const parent = await parentCategoryRepo.findAll(subDomain);
    // const category = await categoryRepo.findAll(subDomain);

    // const dataParent = [];

    // const result = parent.map((p) => {
    //   const catId = category.filter((c) => c.parentCategory === p._id);
    //   return { ...p, catId };
    // });

    res.status(200).json(parent);

    // res.status(200).send({ status: "success", data: parent });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
