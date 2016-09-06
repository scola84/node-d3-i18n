import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  format: 'umd',
  globals: {
    'moment': 'moment',
    'moment-timezone': 'moment'
  },
  plugins: [
    resolve({
      jsnext: true,
      skip: ['moment', 'moment-timezone']
    }),
    commonjs({
      exclude: ['**/node_modules/lodash-es/**']
    }),
    buble()
  ]
};
