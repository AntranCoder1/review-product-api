import { Request, Response } from "express";
import * as exitPopupRepo from "../repositories/exitPopup.repo";

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const newExitPopup = await exitPopupRepo.create({
      name: req.body.name,
      heading: req.body.heading,
      headingFont: req.body.font,
      headingFontSize: req.body.headingFontSize,
      headingColor: req.body.headingColor,
      body: req.body.body,
      bodyFont: req.body.bodyFont,
      bodyFontSize: req.body.bodyFontSize,
      bodyColor: req.body.bodyColor,
      buttonText: req.body.buttonText,
      buttonTextColor: req.body.buttonTextColor,
      buttonColor: req.body.buttonColor,
      buttonLink: req.body.buttonLink,
      user: _user._id,
    });
    res.status(200).json({ data: "Create successful", _id: newExitPopup._id });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const exitPopup = await exitPopupRepo.getOne({ _id: req.params._id });
    res.status(200).json({ data: exitPopup });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const keySearch = req.body.search ? req.body.search : "";
    const data = await exitPopupRepo.getMany({
      $and: [
        { user: _user._id },
        { name: { $regex: ".*" + keySearch + ".*" } },
      ],
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    await exitPopupRepo.updateOne(req.body._id, {
      name: req.body.name,
      heading: req.body.heading,
      headingFont: req.body.font,
      headingFontSize: req.body.headingFontSize,
      headingColor: req.body.headingColor,
      body: req.body.body,
      bodyFont: req.body.bodyFont,
      bodyFontSize: req.body.bodyFontSize,
      bodyColor: req.body.bodyColor,
      buttonText: req.body.buttonText,
      buttonTextColor: req.body.buttonTextColor,
      buttonColor: req.body.buttonColor,
      buttonLink: req.body.buttonLink,
    });
    res.status(200).json({ data: "Update successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    await exitPopupRepo.deleteOne(req.params.id);
    res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
