import { argv, stdout } from 'process';

const getUsername = () => {
    return argv.length > 2
      ? argv[2].replace(/^.*\b=/gm, '')
      : 'Anonymous';
}

export const greeting = () => {
    stdout.write(`Welcome to the File Manager, ${getUsername()}!\n`);
}

export const currentPath = () => {
    stdout.write(`You are currently in ${process.cwd()} \n`);
}

export const goodbye = () => {
    stdout.write(`Thank you for using File Manager, ${getUsername()}, goodbye!\n`);
}
