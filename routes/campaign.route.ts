import express from "express";
import * as controller from "../controllers/campaign.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyCampaign from "../verifyModel/campaign.verify";

const router = express.Router();

router.get("/getOffer", controller.getOffer);
router.post("/create", jwtMiddleware, controller.create);
router.get("/getById/:id", jwtMiddleware, verifyCampaign, controller.getById);
router.post("/update", jwtMiddleware, verifyCampaign, controller.update);
router.post(
	"/updateStatus",
	jwtMiddleware,
	verifyCampaign,
	controller.updateStatus
);
router.post("/getList", jwtMiddleware, controller.getList);
router.delete(
	"/deleteOne/:id",
	jwtMiddleware,
	verifyCampaign,
	controller.deleteOne
);

export default router;
