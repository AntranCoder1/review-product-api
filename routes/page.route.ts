import express from "express";
import * as controller from "../controllers/page.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifySubDomain from "../verifyModel/subDomain.verify";
import verifyPage from "../verifyModel/page.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, verifySubDomain, controller.create);
router.get("/getById/:id", jwtMiddleware, verifyPage, controller.getById);
router.post("/getBySlug", controller.getBySlug);
router.post("/getList", controller.getList);
router.post("/update", jwtMiddleware, verifyPage, controller.update);
router.delete(
  "/deletePage/:id",
  jwtMiddleware,
  verifyPage,
  controller.deletePage
);
router.post(
  "/updateStatus",
  jwtMiddleware,
  verifyPage,
  controller.updateStatus
);
export default router;
