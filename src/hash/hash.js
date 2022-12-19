import { createReadStream } from 'fs';
import { resolve } from 'path';
import { error } from '../utils/writeMessage.js';
import { createHash } from 'crypto';

export const hash = (path) => {
    const readStream = createReadStream(resolve(path), 'utf-8');
    let data = '';
    let hash = '';
    return new Promise((resolve, reject) => {
        readStream.on('data', (chunk) => {
            data += chunk;
        });
        readStream.on('error', () => {
            reject();
        });
        readStream.on('end', () => {
            hash = createHash('sha256').update(data).digest('hex');
            resolve();
        });
    }).then(() => {
        console.log(`Hash: ${hash}`);
    }).catch(() => {
        error();
    })

}
