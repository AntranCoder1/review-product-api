import { NextFunction } from "connect";
import { Request, Response } from "express";
import * as jwtUtil from "../utils/jwt.util";
import * as userRepo from "../repositories/user.repo";
import * as feedUrlRepo from "../repositories/feedUrl.repo";

const verify = (req: Request, res: Response, next: NextFunction) => {
  try {
    const _user = req.body.user;
    feedUrlRepo.getOne({ _id: req.body._id }).then((feedUrl) => {
      if (!feedUrl) {
        return res.status(400).json({ message: "feedUrl is not exists" });
      }

      if (feedUrl.user.toString() !== _user._id) {
        return res.status(400).json({ message: "Method not allow" });
      }

      next();
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export default verify;
