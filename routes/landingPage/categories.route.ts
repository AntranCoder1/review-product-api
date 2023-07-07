import express from "express";
import * as categoryController from "../../controllers/category.controller";
import jwtMiddleware from "../../middlewares/jwt.middleware";
import verifyCampaign from "../../verifyModel/campaign.verify";

const router = express.Router();

router.post("/getCategories", categoryController.getAllCategory);

router.post("/getCategoryId", categoryController.getCategoryId);

export default router;
