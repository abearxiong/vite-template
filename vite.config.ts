import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pkgs from './package.json';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import 'dotenv/config';

const isDev = process.env.NODE_ENV === 'development';
const basename = isDev ? '/' : pkgs?.basename || '/';

let target = process.env.VITE_API_URL || 'http://localhost:51515';
const apiProxy = { target: target, changeOrigin: true, ws: true, rewriteWsOrigin: true, secure: false, cookieDomainRewrite: 'localhost' };
let proxy = {
  '/root/': apiProxy,
  '/api': apiProxy,
  '/client': apiProxy,
};
/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: basename,
  define: {
    BASE_NAME: JSON.stringify(basename),
  },
  server: {
    port: 7008,
    host: '0.0.0.0',
    allowedHosts: true,
    proxy,
  },
});
