import express from "express";
import * as controller from "../controllers/block.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyCampaign from "../verifyModel/campaign.verify";

const router = express.Router();

router.post("/getList", jwtMiddleware, controller.getList);
router.post("/getId", jwtMiddleware, controller.getId);
router.post("/edit", jwtMiddleware, controller.editBlock);
router.post("/delete", jwtMiddleware, controller.deleteBlock);
router.post("/updateStatus", jwtMiddleware, controller.updateStatus);

export default router;
