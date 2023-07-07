import express from "express";
import * as controller from "../controllers/adsManagement.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyCampaign from "../verifyModel/campaign.verify";

const router = express.Router();

router.post("/createAsds", jwtMiddleware, controller.createAds);

router.get("/:url", controller.getImage);

router.post("/updateAds", jwtMiddleware, controller.updateAds);

router.post("/updateStatusAds", jwtMiddleware, controller.updateStatus);

router.post("/getList", jwtMiddleware, controller.getAll);

router.post("/getId", jwtMiddleware, controller.getId);

router.post("/delete", jwtMiddleware, controller.deleteAds);

export default router;
