import express from "express";
import * as controller from "../../controllers/landingPage/subDomain.controller";

const router = express.Router();

router.get("/getById/:id", controller.getById);
router.get("/getBySubDomain/:name", controller.getBySubDomain);

export default router;
