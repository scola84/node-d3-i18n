import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  format: 'umd',
  external: [
    'moment',
    'moment-timezone'
  ],
  globals: {
    'moment': 'moment',
    'moment-timezone': 'moment'
  },
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs({
      exclude: ['**/lodash-es/**']
    }),
    buble()
  ]
};
