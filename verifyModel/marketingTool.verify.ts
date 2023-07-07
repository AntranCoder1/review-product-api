import { NextFunction } from "connect";
import { Request, Response } from "express";
import * as jwtUtil from "../utils/jwt.util";
import * as marketingToolRepo from "../repositories/marketingTool.repo";

const jwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const _user = req.body.user;
    let _id = req.body._id;
    if (!_id) {
      _id = req.params.id;
    }
    marketingToolRepo.getOne({ _id }).then((dataRes) => {
      if (!dataRes) {
        return res
          .status(400)
          .json({ message: "Marketing Tool is not exists" });
      }

      if (dataRes.user.toString() !== _user._id) {
        return res.status(400).json({ message: "Method not allow" });
      }

      next();
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export default jwt;
