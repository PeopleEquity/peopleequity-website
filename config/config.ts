import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    // default: 'en-US',
    default: 'en-US',
    baseSeparator: '-',
    title: false,
    baseNavigator: true,
  },
  routes,
  npmClient: 'npm',
  tailwindcss: {},
  metas: [
    { content: 'yes', name: 'apple-mobile-web-app-capable' },
    { content: 'black', name: 'apple-mobile-web-app-status-bar-style' },
    {
      content:
        'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,viewport-fit=cover,minimal-ui',
      name: 'viewport',
    },
    { content: 'telephone=no', name: 'format-detection' },
    { content: 'yes', name: 'full-screen' },
    { content: 'application', name: 'browsermode' },
    { content: 'true', name: 'x5-fullscreen' },
    { content: 'app', name: 'x5-page-mode' },
    { content: '', name: 'pab-webapp-header-style' },
  ],
});
