import * as controller from "../../controllers/newCampaign.controller";
import express from "express";
const router = express.Router();

router.get("/getById/:id", controller.getById);

export default router;
