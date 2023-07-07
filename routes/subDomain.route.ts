import express from "express";
import * as controller from "../controllers/subDomain.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifySubDomain from "../verifyModel/subDomain.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, controller.create);
router.post("/update", jwtMiddleware, verifySubDomain, controller.update);
router.post(
  "/updateConfig",
  jwtMiddleware,
  verifySubDomain,
  controller.updateConfig
);
router.get("/getById/:id", jwtMiddleware, controller.getById);
router.get("/getList", jwtMiddleware, controller.getList);
router.get("/getDashboard", jwtMiddleware, controller.getDashboard);
router.post("/checkSubDomainName", controller.checkSubDomainName);

export default router;
