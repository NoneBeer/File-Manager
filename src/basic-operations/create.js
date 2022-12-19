import { createWriteStream } from 'fs';
import { join } from 'path';
import { error } from '../utils/writeMessage.js';

export const createFile = (fileName) => {
    return new Promise((resolve, reject) => {
        const ws = createWriteStream(join(process.cwd(), fileName), { flags: 'wx' });
        ws.on('error', () => reject());
        ws.on('finish', () => resolve())
        ws.close();
    }).then(() => {
        console.log(`File ${fileName} was created`);
    }).catch(() => {
        error();
    })
};
