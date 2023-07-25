const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");

const compile = (origin, destination) => {
    result = Sass.renderSync({
        data: Fs.readFileSync(Path.resolve(origin)).toString(),
        outputStyle: "expanded",
        outFile: "global.css",
        includePaths: [Path.resolve("src")],
      });

      Fs.writeFileSync(Path.resolve(destination), result.css.toString());
}
  
compile("src/global.scss", "src/lib/global.css");
