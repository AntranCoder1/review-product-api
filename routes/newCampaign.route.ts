import express from "express";
import * as controller from "../controllers/newCampaign.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyNewCampaign from "../verifyModel/newCampaign.verify";

const router = express.Router();

router.post("/getListFromApi", controller.getListFromApi);
router.get("/getTemplates", controller.getTemplates);

router.post("/create", jwtMiddleware, controller.create);
router.post("/update", jwtMiddleware, verifyNewCampaign, controller.update);
router.get(
	"/getById/:id",
	jwtMiddleware,
	verifyNewCampaign,
	controller.getById
);
router.post("/getList", jwtMiddleware, controller.getlist);
router.delete(
	"/deleteOne/:id",
	jwtMiddleware,
	verifyNewCampaign,
	controller.deleteOne
);
router.post("/viewPage", controller.viewPage);

router.get("/getAffiliateInfo", controller.getAffiliateInfo);

export default router;
