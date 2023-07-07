import express from "express";
import * as controller from "../../controllers/landingPage/campaign.controller";
import jwtMiddleware from "../../middlewares/jwt.middleware";
import verifyCampaign from "../../verifyModel/campaign.verify";

const router = express.Router();

router.get("/getById/:id", controller.getById);

export default router;
