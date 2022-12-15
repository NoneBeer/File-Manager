import { resolve } from 'path';
import { isExist } from "../utils/checkExist.js";

export const changeDirectory = async (path) => {
    try {
        if (!path || !await isExist(path)) new Error();
        process.chdir(resolve(path));
    } catch(error) {
        console.error('Operation filed');
    }
}
