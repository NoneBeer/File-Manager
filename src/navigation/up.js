import { resolve } from 'path';
import { error } from "../utils/writeMessage.js";

export function up() {
    const path = resolve(process.cwd(), '..');
    try {
        process.chdir(path);
    } catch {
        error();
    }
}
