import { Request, Response } from "express";
import * as adsManagementRepo from "../../repositories/adsManagement.repo";
import path from "path";

export const getImage = async (req: Request, res: Response) => {
  try {
    const url = path.join(
      __dirname,
      "../../uploads/adsManagement" + "/" + req.params.url
    );
    res.sendFile(url);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const subDomain = req.body.subDomain;

    const findAll = await adsManagementRepo.findAlllanding(subDomain);

    if (findAll) {
      res.status(200).send({ status: "success", findAll });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
