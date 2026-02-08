// @ts-ignore
export const basename = BASE_NAME;

export const wrapBasename = (path: string) => {
  const hasEnd = path.endsWith('/')
  if (basename) {
    return `${basename}${path}` + (hasEnd ? '' : '/');
  } else {
    return path;
  }
}