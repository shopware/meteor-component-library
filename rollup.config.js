import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import scss from 'rollup-plugin-scss';
import svg from 'rollup-plugin-svg-import';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
  input: "src/index.ts",
  external: [
    'vue'
  ],
  output: [
    {
      format: "cjs",
      // file: packageJson.main,
      dir: 'dist/common',
      sourcemap: true,
      exports: 'auto'
    },
    {
      format: "esm",
      // file: packageJson.module,
      dir: 'dist/esm',
      sourcemap: true
    }
  ],
  plugins: [
    vue(),
    commonjs(),
    svg({
      // process SVG to DOM Node or String. Default: false
      stringify: true
    }),
    typescript(),
    scss({
      output: 'dist/style.css',
      failOnError: true,
    }),
    dynamicImportVars({
      // options
    }),
    resolve(),
  ]
};