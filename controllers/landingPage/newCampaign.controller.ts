import { Request, Response } from "express";
import * as newCampaignRepo from "../../repositories/newCampaign.repo";

export const getById = async (req: Request, res: Response) => {
  try {
    const data = await newCampaignRepo.getOne({ _id: req.params.id });

    res.status(200).json({ data: data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
