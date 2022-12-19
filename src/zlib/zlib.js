import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { error } from '../utils/writeMessage.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';
import { rm } from 'fs/promises';

export const zlib = async ([source, destination], method) => {
    const destinationPath = method === 'compress'
      ? resolve(destination.replace(/.br$/gi, ''), parse(source).name + '.br')
      : resolve(destination.replace(/.txt$/gi, ''), parse(source).name + '.txt');

    const rs = createReadStream(resolve(source), {flags: 'r'});
    const ws = createWriteStream(destinationPath, { flags: 'wx' });

    if (method === 'compress') {
        await compress(rs, ws)
          .then(() => console.log(`File ${source} has been compressed to ${destinationPath}`))
          .catch(() => {
              ws.on('close', () => rm(destinationPath));
              ws.close();
              error();
          });
    }

    if (method === 'decompress') {
        await decompress(rs, ws)
          .then(() => console.log(`File ${source} has been decompressed to ${destinationPath}`))
          .catch(() => {
              ws.on('close', () => rm(destinationPath));
              ws.close();
              error();
          });
    }
}
