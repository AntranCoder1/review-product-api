import { Request, Response } from "express";
import * as categoryRepo from "../repositories/Category.repo";
import * as parentCategoryRepo from "../repositories/parentCategory.repo";
import * as subDomainRepo from "../repositories/subDomain.repo";
import * as postRepo from "../repositories/post.repo";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const name = req.body.title;
    const parentCategory = req.body.parentCategory;
    const subDomain = req.body.subDomain;
    const slug = req.body.slug;

    const newCategory = await categoryRepo.create({
      name: name,
      slug: slug,
      status: "active",
      subDomain: subDomain,
      parentCategory: parentCategory,
    });
    res.status(200).send({ status: "success", data: newCategory._id });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

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

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const removeCategory = await categoryRepo.deleteCategory(req.body.catId);

    if (removeCategory) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const catId = req.body.catId;
    const subDomain = req.body.subDomain;

    const updateStatus = await categoryRepo.updateStatus(catId, subDomain);

    if (updateStatus) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const catId = req.body.catId;
    const subDomain = req.body.subDomain;
    const dataAdd = req.body.arrAdd;
    const dataDel = req.body.arrDel;
    for (let i of dataDel) {
      const checkExCINP = await postRepo.findCatInPost(i);
      if (checkExCINP.length > 0) {
        const cat: any = await categoryRepo.getOne(i);
        return res.status(400).send({
          status: "false",
          message: cat.name + " had been used in Post",
        });
      }
    }
    if (dataAdd.length > 0) {
      for (const i of dataAdd) {
        const newCategory = await categoryRepo.create({
          name: req.body.title,
          slug: req.body.slug,
          status: "active",
          subDomain: subDomain,
          parentCategory: i,
        });
      }
    }

    if (dataDel.length > 0) {
      for (const i of dataDel) {
        await categoryRepo.deleteCategory(i);
      }
    }

    res.status(200).send({ status: "success" });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
