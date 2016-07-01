import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

function resolveLocal() {
  const map = {
    events: require.resolve('events')
  };

  return {
    resolveId: (importee) => {
      return map[importee] ? map[importee] : null;
    }
  };
}

export default {
  entry: './index.js',
  format: 'umd',
  globals: {
    'moment': 'moment',
    'moment-timezone': 'moment'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false,
      skip: ['moment', 'moment-timezone']
    }),
    resolveLocal(),
    commonjs({
      exclude: ['**/node_modules/lodash-es/**']
    })
  ]
};
