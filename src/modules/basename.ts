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

// 动态计算 basename，根据当前 URL 路径
export const getDynamicBasename = (): string => {
  const path = window.location.pathname
  const [user, key, id] = path.split('/').filter(Boolean)
  if (key === 'v1' && id) {
    return `/${user}/v1/${id}`
  }
  // 默认使用构建时的 basename
  return basename
}