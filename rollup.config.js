// Import rollup plugins
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

// https://rollupjs.org/guide/en/#configuration-files
// https://lit.dev/docs/tools/production/
export default {
    input: 'src/js/main.js',
    plugins: [
      // Resolve bare module specifiers to relative paths
      resolve(),
      // Minify HTML template literals
      minifyHTML(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),
      // Print bundle summary
      summary(),
      // Optional: copy any static assets to build directory
      copy({
        patterns: ['images/**/*'],
      }),
    ],
    output: {
        file: 'src/js/bundle.js',
        format: 'cjs'
    },
    preserveEntrySignatures: 'strict',
};
// export default {
//   input: 'src/js/main.js',
//   output: {
//     file: 'src/js/bundle.js',
//     format: 'cjs'
//   },
//   // https://github.com/rollup/plugins/tree/master/packages/node-resolve
//   plugins: [nodeResolve(), terser()]
// };