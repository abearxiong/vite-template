import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import pkgs from './package.json' with { type: 'json' };
const version = pkgs.version || '0.0.1';

const isDev = process.env.NODE_ENV === 'development';
const basename = isDev ? '/' : pkgs?.basename || '/';

const checkJsh = () => {
  return process.env.SHELL === '/bin/jsh';
};
const isJsh = checkJsh();
const plugins = [react(), tailwindcss()];

if (!isJsh) {
  const basicSsl = await import('@vitejs/plugin-basic-ssl');
  const defaultPlugin = basicSsl.default;
  plugins.push(defaultPlugin());
}

let target = 'https://kevisual.xiongxiao.me';
if (isDev) {
  target = 'https://kevisual.xiongxiao.me';
} else {
  target = 'https://kevisual.cn';
}

let proxy = {
  '/user/login/': {
    target: `https://${target}/user/login/`,
  },
  '/api': {
    target: `https://${target}`,
    changeOrigin: true,
    ws: true,
    rewriteWsOrigin: true,
  },
};
/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: basename,
  define: {
    DEV_SERVER: JSON.stringify(process.env.NODE_ENV === 'development'),
    VERSION: JSON.stringify(version),
    BASE_NAME: JSON.stringify(basename),
  },
  build: {
    target: 'modules',
  },
  server: {
    port: 7006,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        rewriteWsOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/api/router': {
        target: 'ws://localhost:3000',
        changeOrigin: true,
        ws: true,
        rewriteWsOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      ...proxy,
    },
  },
});
