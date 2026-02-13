import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    // Вказуємо папку з index.html
    root: 'src',  // <- ОБОВ’ЯЗКОВО для твоєї структури

    build: {
      sourcemap: true,
      rollupOptions: {
        input: {
          main: './index.html',      // тепер шукає src/index.html
          favorites: './favorites.html', // якщо є
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: '../dist',       // dist буде в корені проєкту
      emptyOutDir: true,
    },

    plugins: [
      injectHTML(),
      FullReload(['./**/*.html']), // тепер слідкує за src/**/*.html
      SortCss({
        sort: 'mobile-first',
      }),
    ],

    base: '/kyrcova3.github.io/', // для GitHub Pages
  };
});
