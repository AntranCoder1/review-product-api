import { Request, Response } from "express";
import * as campaignRepo from "../repositories/campaign.repo";
import * as path from "path";
const fs = require("fs");

export const getOffer = (req: Request, res: Response) => {
  try {
    const jsonFileData = path.join(__dirname, "..", "campaignOffer.json");

    let rawdata = fs.readFileSync(jsonFileData);
    let offers = JSON.parse(rawdata);
    res.status(200).json({ data: offers });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    await campaignRepo.create({
      campaignName: req.body.campaignName,
      clickBankId: req.body.clickBankId,
      headerScriptOrPixelCode: req.body.headerScriptOrPixelCode,
      offer: req.body.offer,
      user: _user._id,
    });
    res.status(200).json({ data: "Create successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const data = await campaignRepo.getMany(
      { user: _user._id },
      req.body.offset,
      req.body.limit
    );
    const totalItem = await campaignRepo.countList({ user: _user._id });

    res.status(200).json({ data, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const existsCampaign = await campaignRepo.getOne({ _id: req.params.id });
    if (!existsCampaign) {
      return res.status(400).json({ message: "Campaign is not exists" });
    }
    res.status(200).json({ data: existsCampaign });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const existedCampaign = await campaignRepo.getOne({ _id: req.body._id });
    if (!existedCampaign) {
      return res.status(400).json({ message: "Campaign is not exists" });
    }

    await campaignRepo.updateOne(req.body._id, {
      campaignName: req.body.campaignName,
      clickBankId: req.body.clickBankId,
      headerScriptOrPixelCode: req.body.headerScriptOrPixelCode,
      offer: req.body.offer,
    });

    res.status(200).json({ data: "Update successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    await campaignRepo.deleteOne(req.params.id);
    res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    await campaignRepo.updateOne(req.body._id, {
      active: req.body.active,
    });

    res.status(200).json({ data: "Update status successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
