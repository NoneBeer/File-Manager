import { currentPath, goodbye, greeting } from './writeMessage.js';
import { homedir } from "os";
import { readDirectory } from './navigation/readDirectory.js';
import { up } from './navigation/up.js';
import { changeDirectory } from './navigation/changeDirectory.js';

export const executeOperation = async (operation) => {
    const [command, ...params] = operation.trim().split(' ');

    switch (command) {
        case 'start': {
            greeting();
            process.chdir(homedir());
            break;
        }
        case '.exit': {
            goodbye();
            process.exit();
            break;
        }
        case 'ls': {
            await readDirectory(process.cwd());
            break;
        }
        case 'up': {
            await up();
            break;
        }
        case 'cd': {
            await changeDirectory(...params);
            break;
        }
    }
    currentPath();
}
