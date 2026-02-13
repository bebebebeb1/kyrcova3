import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    // Якщо всі HTML-файли лежать у корені репо, root прибираємо
    // root: 'src', 

    build: {
      sourcemap: true,
      rollupOptions: {
        // Вказуємо HTML-файли у корені проєкту
        input: {
          main: './index.html',
          favorites: './favorites.html', // якщо потрібен
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
      outDir: 'dist',       // папка для збірки
      emptyOutDir: true,
    },

    plugins: [
      injectHTML(),
      FullReload(['./**/*.html']), // слідкує за HTML у корені і підпапках
      SortCss({
        sort: 'mobile-first',
      }),
    ],

    // Для GitHub Pages
    base: '/kyrcova3.github.io/',
  };
});
