import storage from '../middlewares/googleCloudStorage';
import path from 'path';

export const uploadPhotos = (
  files: Express.Multer.File[],
  bucketName: string
): Promise<string[]> => {
  const bucket = storage.bucket(bucketName);

  const uploadPromises = files.map((file) => {
    return new Promise<string>((resolve, reject) => {
      const blob = bucket.file(Date.now() + path.extname(file.originalname));
      const blobStream = blob.createWriteStream({
        resumable: false,
        contentType: file.mimetype,
      });

      blobStream.on('error', (err) => {
        reject(err);
      });

      blobStream.on('finish', async () => {
        try {
          const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

          resolve(publicUrl);
        } catch (error) {
          reject(error);
        }
      });

      blobStream.end(file.buffer);
    });
  });

  return Promise.all(uploadPromises);
};
