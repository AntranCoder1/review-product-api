import express from "express";
import * as controller from "../../controllers/landingPage/download.controller";
import jwtMiddleware from "../../middlewares/jwt.middleware";
import verifyCampaign from "../../verifyModel/campaign.verify";

const router = express.Router();

router.post(
  "webinarCampaginToPDF",
  jwtMiddleware,
  controller.downloadWebinarCampaign2PDF
);

export default router;
