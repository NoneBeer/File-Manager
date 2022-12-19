import { rm } from 'fs/promises';
import { resolve } from 'path';
import { error } from '../utils/writeMessage.js';

export const deleteFile = async (path) => {
    await rm(resolve(path))
      .then(() => console.log(`File ${path} has been removed`))
      .catch(() => error());
}
