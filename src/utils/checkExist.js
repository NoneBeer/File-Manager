import { access, constants } from 'fs/promises';
import { resolve } from "path";

export const isExist = async (path) => {
    const resolvePath = resolve(path);
    try {
        await access(resolvePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
