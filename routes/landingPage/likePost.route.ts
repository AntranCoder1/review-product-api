import express from "express";
import * as controller from "../../controllers/landingPage/likePost.controller";
import jwtMiddleware from "../../middlewares/jwt.middleware";
import verifyCampaign from "../../verifyModel/campaign.verify";

const router = express.Router();

router.post("/like", controller.create);

export default router;
