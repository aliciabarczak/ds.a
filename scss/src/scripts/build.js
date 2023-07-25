const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");

Sass.renderSync({
  data: Fs.readFileSync(Path.resolve("src/global.scss")).toString(),
  outputStyle: "expanded",
  outFile: "global.css",
  includePaths: [Path.resolve("src")]
});
