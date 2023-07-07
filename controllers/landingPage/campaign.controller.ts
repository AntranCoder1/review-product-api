import { Request, Response } from "express";
import * as campaignRepo from "../../repositories/campaign.repo";

export const getById = async (req: Request, res: Response) => {
  try {
    const existsCampaign = await campaignRepo.getOne({ _id: req.params.id });
    res.status(200).json({ data: existsCampaign });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
