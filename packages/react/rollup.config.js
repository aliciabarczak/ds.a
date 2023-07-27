import Ts from "rollup-plugin-typescript2";

export default {
  input: ["src/index.js"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [Ts()],
  preserveModes: true,
};
