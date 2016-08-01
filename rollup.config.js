import babel from 'rollup-plugin-babel';
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
      preferBuiltins: false,
      skip: ['moment', 'moment-timezone']
    }),
    commonjs({
      exclude: ['**/node_modules/lodash-es/**']
    }),
    babel({
      presets: ['es2015-rollup']
    })
  ]
};
