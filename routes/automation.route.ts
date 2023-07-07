import express from "express";
import * as controller from "../controllers/automation.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyAutomation from "../verifyModel/automation.verify";
import verifySubDomain from "../verifyModel/subDomain.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, verifySubDomain, controller.create);
router.post("/getList", jwtMiddleware, verifySubDomain, controller.getList);
router.post(
	"/deleteOne",
	jwtMiddleware,
	verifyAutomation,
	controller.deleteOne
);
router.post(
	"/updateStatus",
	jwtMiddleware,
	verifyAutomation,
	controller.updateStatus
);
router.get("/startCron", controller.startCron);

export default router;
