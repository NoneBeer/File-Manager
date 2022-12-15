import { readdir } from 'fs/promises';

export async function readDirectory(path) {
    try {
        const dirents = await readdir(path, { withFileTypes: true });

        dirents.map(dirent => {
            if (dirent.isFile()) {
                return dirent.type = 'file';
            }
            if (dirent.isDirectory()) {
                return dirent.type = 'directory';
            }
            return dirent.type = 'unknown';
        })

        dirents.sort((a, b) => {
            if (a.type === b.type) {
                return a.name > b.name ? 1 : -1;
            } else {
                return a.type > b.type ? 1 : -1;
            }
        });

        console.table(dirents);
    } catch (err) {
        console.error('Operation failed');
    }
}
