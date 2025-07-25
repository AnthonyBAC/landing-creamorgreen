// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeComments: true,
          collapseWhitespace: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          minifyCSS: true,
          minifyJS: true,
          removeScriptTypeAttributes: true,
        },
      },
      JavaScript: {
        terser: {
          compress: {
            drop_console: true, // Quitar console.log en producción
          },
        },
      },
      SVG: true,
      Logger: 1,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  devToolbar: {
    enabled: false,
  },
});
