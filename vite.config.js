import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  root: 'src',                 // index.html в src
  base: '/kyrcova3.github.io/',

  build: {
    outDir: '../dist',         // dist у корені проєкту
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },

  plugins: [
    injectHTML(),
    FullReload(['./**/*.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
});
