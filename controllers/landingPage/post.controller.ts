import { Request, Response } from "express";
import * as postRepo from "../../repositories/post.repo";
import * as categoryRepo from "../../repositories/Category.repo";

export const getList = async (req: Request, res: Response) => {
  try {
    const catId = req.body.catId;
    const data = await postRepo.getMany(
      {
        subDomain: req.body.subDomain,
        category_id: catId,
        title: req.body.keyword,
      },
      req.body.offset,
      req.body.limit
    );
    const totalItem = await postRepo.countList({
      subDomain: req.body.subDomain,
      category_id: catId,
      title: req.body.keyword,
    });
    res.status(200).json({ data, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const detail = await postRepo.getOne({ _id: req.params.id });
    const newView = detail?.view ? detail.view + 1 : 1;
    await postRepo.updateOne(detail?._id, { view: newView });

    res.status(200).json({ data: detail });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getBySlug = async (req: Request, res: Response) => {
  try {
    const detail = await postRepo.getOne({
      $and: [{ slug: req.body.slug }, { subDomain: req.body.subDomain }],
    });
    const newView = detail?.view ? detail.view + 1 : 1;
    await postRepo.updateOne(detail?._id, { view: newView });
    res.status(200).json({ data: detail });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getBySlugCategory = async (req: Request, res: Response) => {
  try {
    const getCat: any = await categoryRepo.findBySlug(req.body.slug);

    const data = {
      categoryId: getCat._id,
      offset: req.body.offset,
      limit: req.body.limit,
    };

    const detail = await postRepo.getSlug(data);

    const count = await postRepo.countPostBySlugCat({
      category_id: getCat._id,
    });

    if (detail) {
      res.status(200).json({ data: detail, count: count, cat: getCat });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getTop10 = async (req: Request, res: Response) => {
  try {
    const data = await postRepo.getMany(
      {
        subDomain: req.body.subDomain,
      },
      req.body.offset,
      req.body.limit
    );
    const totalItem = await postRepo.countList({
      subDomain: req.body.subDomain,
    });
    res.status(200).json({ data, totalItem });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getListByDate = async (req: Request, res: Response) => {
  try {
    const data = await postRepo.getMany(
      {
        subDomain: req.body.subDomain,
        title: req.body.keyword,
        endDate: req.body.endDate,
        startDate: req.body.startDate,
      },
      req.body.offset,
      req.body.limit
    );

    const totalItem = await postRepo.countList({
      subDomain: req.body.subDomain,
      title: req.body.keyword,
      endDate: req.body.endDate,
      startDate: req.body.startDate,
    });

    res.status(200).json({ data, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getNextPost = async (req: Request, res: Response) => {
  try {
    const post = await postRepo.getNextPost(req.body.subDomain, req.body._id);
    res.status(200).json({ data: post[0] });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getPreviousPost = async (req: Request, res: Response) => {
  try {
    const post = await postRepo.getPreviousPost(
      req.body.subDomain,
      req.body._id
    );
    res.status(200).json({ data: post[0] });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getPostComment = async (req: Request, res: Response) => {
  try {
    const post = await postRepo.getPostComment(
      req.body.subDomain,
      req.body.offset,
      req.body.limit
    );

    const count = await postRepo.countPostComment({
      subDomain: req.body.subDomain,
    });

    if (post) {
      res.status(200).json({ data: post, count: count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
