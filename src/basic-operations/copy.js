import { createReadStream, createWriteStream } from 'fs';
import { basename, resolve } from 'path';
import { error } from '../utils/writeMessage.js';
import { sep } from 'path';

export const copyFile = ([oldPath, newPath]) => {
    return new Promise((res, rej) => {
        const rs = createReadStream(resolve(oldPath), { encoding: 'utf8' });
        const ws = createWriteStream(resolve(newPath + sep + basename(oldPath)), { flags: 'wx' });
        rs.on('error', () => rej());
        ws.on('error', () => rej());
        rs.pipe(ws).on("finish", () => res());
    }).then(() => {
        console.log(`File ${oldPath} has been copied to ${resolve(newPath)}`)
    }).catch(() => {
        error();
    });
}
