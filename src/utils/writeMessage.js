import { getUsername } from './getParams.js'

export const greeting = () => {
    console.log(`Welcome to the File Manager, ${getUsername()}!`);
}

export const currentPath = () => {
    console.log(`You are currently in ${process.cwd()}`);
}

export const goodbye = () => {
    console.log(`Thank you for using File Manager, ${getUsername()}, goodbye!`);
}
export const error = () => {
    console.error('Operation failed');
}
export const invalid = () => {
    console.error('Invalid input')
}
