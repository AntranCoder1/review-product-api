import express from "express";
import * as categoryController from "../controllers/category.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyCampaign from "../verifyModel/campaign.verify";

const router = express.Router();

router.post(
  "/createCategory",
  jwtMiddleware,
  categoryController.createCategory
);

router.post("/getCategories", jwtMiddleware, categoryController.getAllCategory);

router.post("/getCategoryId", jwtMiddleware, categoryController.getCategoryId);

router.post(
  "/deleteCategory",
  jwtMiddleware,
  categoryController.deleteCategory
);

router.post("/updateStatus", jwtMiddleware, categoryController.updateStatus);

router.post(
  "/updateCategory",
  jwtMiddleware,
  categoryController.updateCategory
);

export default router;
