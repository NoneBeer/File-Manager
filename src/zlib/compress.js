import { createBrotliCompress } from 'zlib';

export const compress = async (rs, ws) => {
    return new Promise((resolve, reject) => {
        rs.on('error', () => reject());
        ws.on('error', () => reject());
        const brotliCompress = createBrotliCompress();
        brotliCompress.on('error', () => reject)
        const compressStream = rs.pipe(brotliCompress).pipe(ws);
        compressStream.on('error', () => reject());
        compressStream.on('finish', () => resolve());
    });
}
