import { Request, Response } from "express";
import * as tutorialRepo from "../repositories/tutorial.repo";

export const getList = async (req: Request, res: Response) => {
  try {
    const data = await tutorialRepo.getMany();
    return res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
