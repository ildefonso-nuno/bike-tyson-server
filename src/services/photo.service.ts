import path from 'path';
import bucket from '../middlewares/googleCloudStorage';

export const uploadPhotos = (
  files: Express.Multer.File[]
): Promise<string[]> => {
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

          // Make the file publicly accessible
          await blob.makePublic();

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
