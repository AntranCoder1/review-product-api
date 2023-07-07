import express from "express";
import * as parentCategoryController from "../controllers/parentCategory.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyCampaign from "../verifyModel/campaign.verify";

const router = express.Router();

router.post(
  "/createParentCategory",
  jwtMiddleware,
  parentCategoryController.create
);

router.post(
  "/getAllParentCategories",
  jwtMiddleware,
  parentCategoryController.getAllParentCategory
);

export default router;
