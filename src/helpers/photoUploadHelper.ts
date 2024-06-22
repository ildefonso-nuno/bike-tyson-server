import { Request, Response } from 'express';
import { uploadPhotos } from '../services/photo.service';
import { updateBicycle } from '../services/bicycle.service';

export const handlePhotoUpload = async (
  req: Request,
  res: Response,
  bicycleId: number
): Promise<string[]> => {
  // Default photo URL if no photo is uploaded
  const defaultPhotoUrl = 'https://example.com/default-photo.jpg';
  let photosUrlArray = [defaultPhotoUrl];

  if (req.files && (req.files as Express.Multer.File[]).length > 0) {
    try {
      photosUrlArray = await uploadPhotos(req.files as Express.Multer.File[]);

      // Update bicycle with the uploaded photo URLs
      await updateBicycle(bicycleId, {
        photos_url: {
          set: photosUrlArray,
        },
      });
    } catch (error) {
      console.error('Failed to upload photos', error);
      throw new Error('Failed to upload photos');
    }
  }

  return photosUrlArray;
};
