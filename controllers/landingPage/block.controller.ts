import { Request, Response } from "express";
import * as blockRepo from "../../repositories/block.repo";

export const getList = async (req: Request, res: Response) => {
  try {
    const subDomain = req.body.subDomain;

    const getBlocks = await blockRepo.findAll({ subDomain, status: true });

    if (getBlocks) {
      res.status(200).send({ status: "success", data: getBlocks });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
