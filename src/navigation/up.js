import { resolve } from "path";

export function up() {
    const path = resolve(process.cwd(), '..');
    try {
        process.chdir(path);
    } catch {
        console.error('Operation failed')
    }
}
