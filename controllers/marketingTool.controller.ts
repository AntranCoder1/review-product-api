import { Request, Response } from "express";
import * as marketingToolRepo from "../repositories/marketingTool.repo";

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method not allow" });
    }
    await marketingToolRepo.create({
      type: req.body.type,
      position: req.body.position,
      imageUrl: req.body.imageUrl,
      linkUrl: req.body.linkUrl,
      yourScriptCode: req.body.yourScriptCode,
      autoResponderScriptCode: req.body.autoResponderScriptCode,
      user: _user._id,
      subDomain: req.body.subDomain,
    });

    res.status(200).json({ data: "Create successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method not allow" });
    }
    const marketingTools = await marketingToolRepo.getMany(
      {
        subDomain: req.body.subDomain,
      },
      req.body.offset,
      req.body.limit
    );
    const totalItem = await marketingToolRepo.countList({
      subDomain: req.body.subDomain,
    });

    res.status(200).json({ data: marketingTools, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const marketingTool = await marketingToolRepo.getOne({
      _id: req.params.id,
    });
    res.status(200).json({ data: marketingTool });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method not allow" });
    }

    await marketingToolRepo.updateOne(req.body._id, {
      type: req.body.type,
      position: req.body.position,
      imageUrl: req.body.imageUrl,
      linkUrl: req.body.linkUrl,
      yourScriptCode: req.body.yourScriptCode,
      autoResponderScriptCode: req.body.autoResponderScriptCode,
    });
    res.status(200).json({ data: "Update successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method not allow" });
    }

    const marketingTool = await marketingToolRepo.getOne({
      _id: req.params.id,
    });

    if (!marketingTool) {
      return res.status(400).json({ message: "Marketing Tool is not exists" });
    }
    await marketingToolRepo.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
