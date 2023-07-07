import { NextFunction } from "connect";
import { Request, Response } from "express";
import * as jwtUtil from "../utils/jwt.util";
import * as userRepo from "../repositories/user.repo";
import * as subDomainRepo from "../repositories/subDomain.repo";

const jwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const _user = req.body.user;
    const subDomainId = req.body.subDomain ? req.body.subDomain : req.body._id;
    subDomainRepo.getOne({ _id: subDomainId }).then((resSubDomain) => {
      if (!resSubDomain) {
        return res.status(400).json({ message: "Sub Domain is not exists" });
      }

      if (resSubDomain.user.toString() !== _user._id) {
        return res.status(400).json({ message: "Method not allow" });
      }

      next();
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export default jwt;
