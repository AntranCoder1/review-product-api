import { Request, Response } from "express";
import fs from "fs";
export const downloadWebinarCampaign2PDF = async (
  req: Request,
  res: Response
) => {
  try {
    let element = req.body.element;
    let sourceCode = element.download;
    if (!sourceCode || sourceCode == null || sourceCode == "") {
      throw new Error("Nothing to download.");
    }
    for (let i = 1; i < 10; i++) {
      console.log(i);
    }
    // Create file PDF
    // Coming soon
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
