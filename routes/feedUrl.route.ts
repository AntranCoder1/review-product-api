import express from "express";
import * as controller from "../controllers/feedUrl.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifySubDomain from "../verifyModel/subDomain.verify";
import verifyFeedUrl from "../verifyModel/feedUrl.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, verifySubDomain, controller.create);
router.post("/systemCreate", controller.systemCreate);
router.post("/getList", jwtMiddleware, verifySubDomain, controller.getList);
router.post("/deleteOne", jwtMiddleware, verifyFeedUrl, controller.deleteOne);
router.post("/checkUrl", jwtMiddleware, verifySubDomain, controller.checkUrl);

export default router;
