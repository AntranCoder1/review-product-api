import { Request, Response } from "express";
import * as socialProofPopupRepo from "../repositories/socialProofPopup.repo";

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const newSocialProofPopup = await socialProofPopupRepo.create({
      title: req.body.title,
      content: req.body.content,
      link: req.body.link,
      displayTime: req.body.displayTime,
      timeDifference: req.body.timeDifference,

      user: _user._id,
    });
    res
      .status(200)
      .json({ data: "Create successful", _id: newSocialProofPopup._id });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const socialProofPopup = await socialProofPopupRepo.getOne({
      _id: req.params._id,
    });
    res.status(200).json({ data: socialProofPopup });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const keySearch = req.body.search ? req.body.search : "";
    const data = await socialProofPopupRepo.getMany({
      $and: [
        { user: _user._id },
        { title: { $regex: ".*" + keySearch + ".*" } },
      ],
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    await socialProofPopupRepo.updateOne(req.body._id, {
      title: req.body.title,
      content: req.body.content,
      link: req.body.link,
      displayTime: req.body.displayTime,
      timeDifference: req.body.timeDifference,
    });
    res.status(200).json({ data: "Update successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    await socialProofPopupRepo.deleteOne(req.params.id);
    res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getByUser = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const data = await socialProofPopupRepo.getOne({ user: _user._id });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
