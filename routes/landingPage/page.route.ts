import express from 'express';
import * as controller from '../../controllers/landingPage/page.controller';

const router = express.Router();

router.post('/getList', controller.getList);
router.get('/getById/:id', controller.getById);
router.post('/getBySlug', controller.getBySlug);

export default router;
