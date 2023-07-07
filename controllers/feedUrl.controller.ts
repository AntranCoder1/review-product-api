import { Request, Response } from "express";
import * as feedUrlRepo from "../repositories/feedUrl.repo";
import * as subDomainRepo from "../repositories/subDomain.repo";

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    await feedUrlRepo.create({
      url: req.body.url,
      user: _user._id,
      subDomain: req.body.subDomain,
    });

    res.status(200).json({ message: "Create successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const systemCreate = async (req: Request, res: Response) => {
  try {
    const existedFeedUrl = await feedUrlRepo.getOne({ url: req.body.url });
    if (existedFeedUrl) {
      return res.status(400).json({ message: "Url already exists" });
    }

    await feedUrlRepo.create({
      url: req.body.url,
      systemCreated: true,
      subDomain: req.body.subDomain,
    });

    res.status(200).json({ message: "Create successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const feedUrls = await feedUrlRepo.getMany(
      { subDomain: req.body.subDomain },
      req.body.offset,
      req.body.limit
    );

    const totalItem = await feedUrlRepo.countList({
      subDomain: req.body.subDomain,
    });

    return res.status(200).json({ data: feedUrls, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const existedFeedUrl = await feedUrlRepo.getOne({
      _id: req.body._id,
      subDomain: req.body.subDomain,
    });
    if (!existedFeedUrl) {
      return res.status(400).json({ message: "Feed url is not exists" });
    }

    await feedUrlRepo.deleteOne({ _id: req.body._id });
    res.status(200).json({ message: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const checkUrl = async (req: Request, res: Response) => {
  try {
    const existedFeedUrl = await feedUrlRepo.getOne({
      url: req.body.url,
      subDomain: req.body.subDomain,
    });
    if (existedFeedUrl) {
      return res.status(200).json({ data: false });
    }
    res.status(200).json({ data: true });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
