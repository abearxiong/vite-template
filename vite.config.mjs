import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pkgs from './package.json';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });
const version = pkgs.version || '0.0.1';
const isDev = process.env.NODE_ENV === 'development';
const basename = isDev ? '/' : pkgs?.basename || '/';
const plugins = [react(), tailwindcss()];
const isCNB = process.env.CNB === 'true';
if (isDev && !isCNB) {
  plugins.push(basicSsl());
}
let target = process.env.VITE_API_URL || 'http://localhost:3000';
let proxy = {
  '/root/center/': {
    target: `${target}/root/center/`,
  },
  '/root/system-lib/': {
    target: `${target}/root/system-lib/`,
  },
  '/user/login/': {
    target: `${target}/user/login/`,
  },
  '/api': {
    target: target,
    changeOrigin: true,
    ws: true,
    rewriteWsOrigin: true,
    cookieDomainRewrite: 'localhost',
  },
};
/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(() => {
  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: basename,
    envPrefix: 'KEVISUAL_',
    define: {
      DEV_SERVER: JSON.stringify(process.env.NODE_ENV === 'development'),
      APP_VERSION: JSON.stringify(version),
      BASE_NAME: JSON.stringify(basename),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    build: {
      target: 'modules',
      // lib: {
      //   entry: './src/libs.ts',
      //   formats: ['es'],
      //   fileName: (format) => `render.js`,
      // },
    },
    server: {
      port: 7008,
      host: '0.0.0.0',
      allowedHosts: true,
      proxy,
    },
  };
});
