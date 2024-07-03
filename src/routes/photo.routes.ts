import { Router } from 'express';
import upload from '../configs/multer.config';
import { uploadPhotosController } from '../controllers/photo.controller';

const router = Router();

router.post('/upload', upload.array('photos', 5), uploadPhotosController);

export default router;
