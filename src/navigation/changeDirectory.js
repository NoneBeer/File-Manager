import { resolve, normalize } from 'path';
import { error } from '../utils/writeMessage.js';

export const changeDirectory = async (path) => {
    try {
        process.chdir(normalize(resolve(path)));
    } catch {
        error();
    }
}
