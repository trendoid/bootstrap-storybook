import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'pathe';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    resolve: {
      alias: {
        '/@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@scss': resolve(__dirname, './src/scss'),
        '@fonts': resolve(__dirname, './src/scss/fonts'),
        '~bootstrap': resolve(__dirname, './node_modules/bootstrap'),
        '~bootstrap-icons': resolve(__dirname, './node_modules/bootstrap-icons'),
      },
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
          }),
        ],
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, './src/js/main.js'),
        name: 'bootstrap-storybook',
        fileName: 'bootstrap-storybook',
      },
      watch: {
        include: [resolve(__dirname, 'src')],
      },
      rollupOptions: {
        output: {
          exports: 'named',
        },
      },
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: resolve(__dirname, './src/scss'),
            dest: resolve(__dirname, './dist/scss')
          }
        ]
      })
    ]
  }
);