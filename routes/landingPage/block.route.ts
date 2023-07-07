import express from "express";
import * as controller from "../../controllers/landingPage/block.controller";

const router = express.Router();

router.post("/getList", controller.getList);

export default router;
