import express from "express";
import * as controller from "../controllers/marketingTool.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifySubDomain from "../verifyModel/subDomain.verify";
import verifyMarketingTool from "../verifyModel/marketingTool.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, verifySubDomain, controller.create);
router.get(
	"/getById/:id",
	jwtMiddleware,
	verifyMarketingTool,
	controller.getById
);
router.post("/update", jwtMiddleware, verifyMarketingTool, controller.update);
router.post("/getList", jwtMiddleware, verifySubDomain, controller.getList);
router.delete(
	"/deleteOne/:id",
	jwtMiddleware,
	verifyMarketingTool,
	controller.deleteOne
);

export default router;
