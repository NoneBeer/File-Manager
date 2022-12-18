import {EOL, cpus, homedir, userInfo,arch} from 'os';
import { invalid } from "../utils/writeMessage.js";

export const operationSystemInfo = (arg) => {
    switch (arg) {
        case '--EOL': {
            console.log(`Default system End-Of-Line is ${JSON.stringify(EOL)}`);
            break;
        }
        case '--cpus': {
            console.log(`Overall amount of CPUS is ${cpus().length}`);
            console.table(cpus().map(cpu => ({model: cpu.model, speed: cpu.speed / 1000})));
            break;
        }
        case '--homedir': {
            console.log(`Home directory is ${homedir()}`);
            break;
        }
        case '--username': {
            console.log(`Current system user name is ${userInfo().username}`);
            break;
        }
        case '--architecture': {
            console.log(`CPU architecture is ${arch()}`);
            break;
        }
        default: {
            invalid();
        }
    }
}
