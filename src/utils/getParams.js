export const getParams = (args) => {
    const params = args.join(' ');
    return /['"]/g.test(args)
      ? params.split(/['"] | ['"]/g).map(param => param.replace(/['"]/g, ''))
      : params.split(' ');
}

export const getUsername = () => {
    return (process.argv.length > 2 && process.argv[2].startsWith('--username'))
      ? process.argv[2].replace(/^.*\b=/gm, '')
      : 'Anonymous';
}
