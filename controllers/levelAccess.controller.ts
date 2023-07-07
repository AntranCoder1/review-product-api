import { Request, Response } from "express";
import * as levelAccessRepo from "../repositories/levelAccess.repo";

export const getList = async (req: Request, res: Response) => {
  try {
    const data = await levelAccessRepo.getMany();
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    let data;
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      data = await levelAccessRepo.getOne({
        $or: [{ _id: req.params.id }, { _idCustom: req.params.id }],
      });
    } else {
      data = await levelAccessRepo.getOne({ _idCustom: req.params.id });
    }

    if (!data) {
      return res.status(400).json({ message: "Level Access Not Found" });
    }
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
