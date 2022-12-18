import { rename } from 'fs/promises';
import { error } from '../utils/writeMessage.js';
import { resolve } from 'path';

export const renameFile = async ([oldName, newName]) => {
    await rename(resolve(oldName), resolve(newName))
      .then(() => console.log(`File ${oldName} has been renamed to ${newName}`))
      .catch(() => error());
};
