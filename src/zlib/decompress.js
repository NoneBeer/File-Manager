import { createBrotliDecompress } from 'zlib';
import { extname } from 'path';

export const decompress = async (rs, ws) => {
    return new Promise((resolve, reject) => {
        if (extname(rs.path) !== '.br') reject();
        rs.on('error', () => reject());
        ws.on('error', () => reject());
        const brotliDecompress = createBrotliDecompress();
        brotliDecompress.on('error', () => reject())
        const decompressStream = rs.pipe(brotliDecompress).pipe(ws);
        decompressStream.on('error', () => reject());
        decompressStream.on('finish', () => resolve());
    });
}
