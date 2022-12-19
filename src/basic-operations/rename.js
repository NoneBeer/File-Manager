import { rename } from 'fs/promises';
import { error } from '../utils/writeMessage.js';
import { basename, resolve } from 'path';

export const renameFile = async ([oldPath, name]) => {
    const newPath = resolve(oldPath).replace(basename(oldPath), '') + name
    await rename(resolve(oldPath), newPath)
      .then(() => console.log(`File '${basename(oldPath)}' has been renamed to '${name}'`))
      .catch(() => error());
};
