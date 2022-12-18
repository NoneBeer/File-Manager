import { createInterface } from 'readline/promises';
import { executeOperation } from './src/commandHandler.js';
import { greeting } from "./src/utils/writeMessage.js";
import { homedir } from "os";

greeting();

process.chdir(homedir());

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.prompt();

rl.on('line', async (command) => {
    await executeOperation(command);
    rl.prompt();
});

rl.on('SIGINT', async () => {
    await executeOperation('.exit');
});
