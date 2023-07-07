import express from 'express';
import * as controller from '../../controllers/landingPage/marketing.controller';

const router = express.Router();

router.post('/getList', controller.getByDomain);
export default router;
