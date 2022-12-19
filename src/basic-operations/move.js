import { createReadStream, createWriteStream } from 'fs';
import { resolve, sep } from 'path';
import { error } from '../utils/writeMessage.js';
import { rm } from 'fs/promises';

export const moveFile = ([oldPath, newPath]) => {

    return new Promise((res, rej) => {
        const rs = createReadStream(resolve(oldPath), { encoding: 'utf8' });
        const ws = createWriteStream(resolve(`${newPath}${sep}${oldPath}`), { flags: 'wx' });
        rs.on('error', () => rej());
        ws.on('error', () => rej());
        rs.pipe(ws).on("finish", () => res());
    }).then(async () => {
        await rm(resolve(oldPath))
          .then(() => console.log(`File '${oldPath}' has been moved to ${resolve(newPath)}`))
          .catch(() => error());
    }).catch(() => {
        error();
    });
}
