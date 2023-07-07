import { Request, Response } from "express";
import * as pageRepo from "../repositories/page.repo";
import * as subDomainRepo from "../repositories/subDomain.repo";
import * as cronAuto from "../utils/cronAuto";

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;

    const existedPage = await pageRepo.getOne({
      $and: [{ subDomain: req.body.subDomain }, { slug: req.body.slug }],
    });
    if (existedPage) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    const newPage = await pageRepo.create({
      content: req.body.content,
      title: req.body.title,
      slug: req.body.slug,
      subDomain: req.body.subDomain,
      user: _user._id,
    });

    res.status(200).json({ message: "Page has been created" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const existedPage = await pageRepo.getOne({
      $or: [{ _id: req.params.id }, { slug: req.params.id }],
    });
    res.status(200).json({ data: existedPage });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getBySlug = async (req: Request, res: Response) => {
  try {
    const existedPage = await pageRepo.getOne({
      subDomain: req.body.subDomain,
      slug: req.body.slug,
    });
    res.status(200).json({ data: existedPage });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const existedSlug = await pageRepo.getOne({
      subDomain: req.body.subDomain,
      slug: req.body.slug,
    });
    if (existedSlug && existedSlug._id.toString() != req.body._id) {
      return res.status(400).json({ message: "Slug already existed" });
    }
    await pageRepo.updateOne(req.body._id, {
      content: req.body.content,
      title: req.body.title,
      slug: req.body.slug,
    });

    res.status(200).json({ data: "Page has been updated" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const existedPage = await pageRepo.getOne({ _id: req.body._id });

    if (!existedPage) {
      return res.status(400).json({ message: "Page is not exists" });
    }
    console.log({ newStatus: !existedPage.status });
    await pageRepo.updateOne(req.body._id, { status: !existedPage.status });

    res.status(200).json({ data: "Update status successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const pages = await pageRepo.getMany(
      { subDomain: req.body.subDomain },
      req.body.offset,
      req.body.limit
    );
    const totalItem = await pageRepo.countList({
      subDomain: req.body.subDomain,
    });
    res.status(200).json({ data: pages, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deletePage = async (req: Request, res: Response) => {
  try {
    await pageRepo.deleteOne(req.params.id);

    res.status(200).json({ data: "Page has been deleted" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
