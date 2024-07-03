import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';

dotenv.config();

let storage: Storage;

if (process.env.GOOGLE_CLOUD_KEYFILE_PATH) {
  storage = new Storage({
    keyFilename: process.env.GOOGLE_CLOUD_KEYFILE_PATH,
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  });
} else {
  storage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  });
}

export default storage;
