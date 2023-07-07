import express from "express";
import * as controller from "../../controllers/landingPage/adsManagement.controller";
import jwtMiddleware from "../../middlewares/jwt.middleware";
import verifyCampaign from "../../verifyModel/campaign.verify";

const router = express.Router();

router.get("/:url", controller.getImage);

router.post("/getList", controller.getAll);

export default router;
