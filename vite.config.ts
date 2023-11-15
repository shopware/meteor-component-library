import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-plugin-svgstring';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    }),
    svg(),
    dts({
      outDir: ['dist/esm', 'dist/common'],
      cleanVueFileName: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        // this is required for the SCSS modules
        find: /^~(.*)$/,
        replacement: '$1',
      },
      {
        find: 'vue',
        replacement: '@vue/compat'
      }
  ]},
  build: {
    sourcemap: true,
    cssMinify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
          // @ts-expect-error - we just use 'es' and 'cjs' here
          `${{ es: 'esm', cjs: 'common' }[format]}/${entryName}.js`,
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
