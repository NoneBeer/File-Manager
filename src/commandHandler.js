import { getParams } from './utils/getParams.js';
import { invalid } from './utils/writeMessage.js'
import { currentPath, goodbye } from './utils/writeMessage.js';
import { readDirectory } from './navigation/readDirectory.js';
import { up } from './navigation/up.js';
import { changeDirectory } from './navigation/changeDirectory.js';

import { readFile } from './basic-operations/read.js';
import { createFile } from './basic-operations/create.js';
import { renameFile } from './basic-operations/rename.js';
import { deleteFile } from './basic-operations/delete.js';
import { copyFile } from './basic-operations/copy.js';
import { moveFile } from './basic-operations/move.js';

export const executeOperation = async (operation) => {
    const [command, ...args] = operation.trim().split(' ');
    const params = getParams(args);
    switch (command) {
        case '.exit': {
            goodbye();
            process.exit();
            break;
        }
        case 'ls': {
            await readDirectory(process.cwd());
            break;
        }
        case 'up': {
            await up();
            break;
        }
        case 'cd': {
            params.length
              ? await changeDirectory(...params)
              : invalid();
            break;
        }
        case 'cat': {
            params.length
              ? await readFile(...params)
              : invalid();
            break;
        }
        case 'add': {
            params.length
              ? await createFile(...params)
              : invalid();
            break;
        }
        case 'rn': {
            params.length >= 2
              ? await renameFile(params)
              : invalid();
            break;
        }
        case 'cp': {
            params.length >= 2
              ? await copyFile(params)
              : invalid();
            break;
        }
        case 'mv': {
            params.length >= 2
              ? await moveFile(params)
              : invalid();
            break;
        }
        case 'rm': {
            params.length
              ? await deleteFile(...params)
              : invalid();
            break;
        }
        default: {
            invalid();
        }
    }
    currentPath();
}
