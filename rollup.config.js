import { rollup } from "rollup";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";

import { chromeExtension, pushReloader } from "rollup-plugin-chrome-extension";

export default {
  input: "src/manifest.json",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [chromeExtension(), pushReloader(), resolve(), commonjs(), svelte()],
};
