import { Request, Response } from "express";
import * as categoryRepo from "../../repositories/Category.repo";
import * as parentCategoryRepo from "../../repositories/parentCategory.repo";
import * as subDomainRepo from "../../repositories/subDomain.repo";
import * as postRepo from "../../repositories/post.repo";

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const getCategories = await categoryRepo.findAll(req.body.subDomain);

    if (getCategories) {
      res.status(200).send({ status: "success", data: getCategories });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCategoryId = async (req: Request, res: Response) => {
  try {
    const getCategoryId = await categoryRepo.findId(
      req.body.catId,
      req.body.subDomain
    );

    if (getCategoryId) {
      res.status(200).send({ status: "success", data: getCategoryId });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
