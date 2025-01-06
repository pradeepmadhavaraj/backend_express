import express from 'express'
import { fetch,create, update,remove, find } from '../controller/userController.js'
const router = express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete/:id',remove);
router.get('/find/:id', find);

export default router;