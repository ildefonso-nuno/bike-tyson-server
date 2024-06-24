import { Request, Response } from 'express';
import { uploadPhotos } from '../services/photo.service';
import { updateBicycle } from '../services/bicycle.service';

export const uploadPhotosController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      res.status(400).json({ error: 'No files uploaded' });
      return;
    }

    const { bucketName, itemId } = req.body;

    if (!bucketName || !itemId) {
      res.status(400).json({ error: 'Bucket name and item ID are required' });
      return;
    }

    if (bucketName !== process.env.BICYCLE_BUCKET_NAME) {
      res.status(400).json({ error: 'Invalid bucket name' });
      return;
    }

    const files = req.files as Express.Multer.File[];
    const publicUrls = await uploadPhotos(files, bucketName);

    // Save photo URLs to the correct table based on the bucket name
    if (bucketName === process.env.BICYCLE_BUCKET_NAME) {
      await updateBicycle(parseInt(itemId, 10), {
        photos_url: {
          push: publicUrls,
        },
      });
    } else {
      res.status(400).json({ error: 'Invalid bucket name' });
      return;
    }

    res.status(201).json({ urls: publicUrls });
  } catch (error) {
    console.error('Failed to upload photos', error);
    res.status(500).json({ error: 'Failed to upload photos' });
  }
};
