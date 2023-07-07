import { Request, Response } from "express";
import * as marketingToolRepo from "../../repositories/marketingTool.repo";

export const getByDomain = async (req: Request, res: Response) => {
  try {
    const result = await marketingToolRepo.getMany(
      { subDomain: req.body.subDomain },
      0,
      100
    );

    res.status(200).json({ data: result });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
