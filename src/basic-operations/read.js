import { resolve } from 'path';
import { createReadStream } from 'fs';
import { error } from '../utils/writeMessage.js';

export const readFile = (path) => {
    const rs = createReadStream(resolve(path), 'utf-8');
    let data = '';

    return new Promise((resolve, reject) => {
        rs.on('error', () => {
            reject();
        });

        rs.on('data', (chunk) => {
            data += chunk;
        });
        rs.on('end', () => {
            resolve();
        });
    }).then(() => {
        process.stdout.write(`${data}\n`);
    }).catch(() => {
        error();
    })
};
