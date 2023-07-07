import { Request, Response } from "express";
import * as pageRepo from "../../repositories/page.repo";
import mongoose, { Document, Schema } from "mongoose";
export const getList = async (req: Request, res: Response) => {
  try {
    const data = await pageRepo.getMany(
      { subDomain: req.body.subDomain, status: true },
      0,
      100
    );

    res.status(200).json({ data: data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const detail = await pageRepo.getOne({ _id: req.params.id });

    res.status(200).json({ data: detail });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getBySlug = async (req: Request, res: Response) => {
  try {
    console.log("getPage", req.body);
    const detail = await pageRepo.getOne({
      $and: [
        { slug: req.body.slug },
        { subDomain: mongoose.Types.ObjectId(req.body.subDomain) },
        { status: true },
      ],
    });

    res.status(200).json({ data: detail });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
