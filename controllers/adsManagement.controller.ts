import { Request, Response } from "express";
import * as adsManagementRepo from "../repositories/adsManagement.repo";
import path from "path";

export const createAds = async (req: Request, res: Response) => {
  try {
    const userId = req.body.user._id;
    const subDomain = req.body.subDomain;
    const position = req.body.position;
    const formArr = req.body.adsArray;

    console.log("req", req.body);

    if (formArr && formArr.length > 0) {
      const createAds = await adsManagementRepo.create(
        formArr,
        userId,
        subDomain
      );
    }

    res.status(201).send({ status: "success" });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const url = path.join(
      __dirname,
      "../../uploads/asdsManagement" + "/" + req.params.url
    );
    res.sendFile(url);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateAds = async (req: Request, res: Response) => {
  try {
    const adsId = req.body.adsId;
    const formArr = req.body.adsArray;
    const userId = req.body.user._id;
    const subDomain = req.body.subDomain;

    if (formArr && formArr.length > 0) {
      for (const i of formArr) {
        const data = {
          image: i.imageURL,
          link: i.link,
          status: i.status,
          position: i.position,
          user: userId,
          subDomain: subDomain,
        };

        const updateAds = await adsManagementRepo.updateAds(adsId, data);
      }
    }

    res.status(200).send({ status: "success" });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const adsId = req.body.adsId;
    const status = req.body.status;

    const updateAds = await adsManagementRepo.updateStatusAds(adsId, status);

    if (updateAds) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const subDomain = req.body.subDomain;
    const offset = req.body.offset;
    const limit = req.body.limit;

    const findAll = await adsManagementRepo.findAll(subDomain, offset, limit);

    const count = await adsManagementRepo.countDocument({
      subDomain: subDomain,
    });

    if (findAll) {
      res.status(200).send({ status: "success", findAll, count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const adsId = req.body.adsId;

    const findAdsId = await adsManagementRepo.findAdsId(adsId);

    if (findAdsId) {
      res.status(200).send({ status: "success", data: findAdsId });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteAds = async (req: Request, res: Response) => {
  try {
    const adsId = req.body.adsId;

    const deleteAds = await adsManagementRepo.deleteAds(adsId);

    if (deleteAds) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
