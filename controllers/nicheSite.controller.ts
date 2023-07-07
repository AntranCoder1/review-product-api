import { Request, Response } from "express";
import * as nicheSiteRepo from "../repositories/nicheSite.repo";

export const getList = async (req: Request, res: Response) => {
  try {
    const data = await nicheSiteRepo.getMany();
    return res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
