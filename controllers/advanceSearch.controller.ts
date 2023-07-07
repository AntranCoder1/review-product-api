import { Request, Response } from "express";
import request from "request";
import * as advanceSearchRepo from "../repositories/advanceSearch.repo";
import * as subDomainRepo from "../repositories/subDomain.repo";

export const update = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method not allow" });
    }
    const existedSubDomain = await subDomainRepo.getOne({
      _id: req.body.subDomain,
    });

    if (!existedSubDomain || existedSubDomain.user.toString() != _user._id) {
      res.status(400).json({ message: "Method is not allow" });
    }

    const existedAdvanceSearch = await advanceSearchRepo.getOne({
      subDomain: req.body.subDomain,
    });

    if (!existedAdvanceSearch) {
      await advanceSearchRepo.create({
        subDomain: req.body.subDomain,
        user: _user._id,
        itemGravity: req.body.itemGravity,
        itemIntialDSale: req.body.itemIntialDSale,
        itemAvgDSale: req.body.itemAvgDSale,
        itemAvgRebill: req.body.itemAvgRebill,
        itemAvgPerSale: req.body.itemAvgPerSale,
        itemPerRebill: req.body.itemPerRebill,
        language: req.body.language,
        sortBy: req.body.sortBy,
        maxResult: req.body.maxResult,
      });
    } else {
      const resTmp = await advanceSearchRepo.updateOne(
        existedAdvanceSearch._id,
        {
          itemGravity: req.body.itemGravity,
          itemIntialDSale: req.body.itemIntialDSale,
          itemAvgDSale: req.body.itemAvgDSale,
          itemAvgRebill: req.body.itemAvgRebill,
          itemAvgPerSale: req.body.itemAvgPerSale,
          itemPerRebill: req.body.itemPerRebill,
          language: req.body.language,
          sortBy: req.body.sortBy,
          maxResult: req.body.maxResult,
        }
      );
    }

    res.status(200).json({ data: "Update successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getDefault = async (req: Request, res: Response) => {
  try {
    const existedDefault = await advanceSearchRepo.getOne({
      subDomain: req.params.id,
    });

    res.status(200).json({ data: existedDefault });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
