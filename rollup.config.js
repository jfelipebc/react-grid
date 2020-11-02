import babel from '@rollup/plugin-babel';
import buble from '@rollup/plugin-buble';
import common from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

import pkg from "./package.json";

export default {
  input: 'src/react-grid.tsx',
  output: [
    {
      file: pkg.umd,
      format: "umd",
      exports: "named",
      strict: true,
      name: "ReactGrid",
      globals: {
        nanoid: "nanoid",
        react: "React",
        "react-dom": "ReactDOM"
      },
    }
  ],
  plugins: [
    typescript(),
    babel({
      extensions: ["tsx", "ts"],
      babelHelpers: "runtime",
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-optional-chaining",
      ],
    }),
    buble({
      objectAssign: true,
      transforms: {
        templateString: false,
      },
    }),
    postcss({
      plugins: [cssnano({
        preset: 'default'
      })]
    }),
    common(),
    resolve(),
  ],
  external: [
    "react",
    "react-dom",
    "nanoid",
    "@babel/runtime",
  ]
}