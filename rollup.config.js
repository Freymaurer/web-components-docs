import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

// https://rollupjs.org/guide/en/#configuration-files
export default {
  input: 'src/js/main.js',
  output: {
    file: 'src/js/bundle.js',
    format: 'cjs'
  },
  // https://github.com/rollup/plugins/tree/master/packages/node-resolve
  plugins: [nodeResolve(), terser()]
};