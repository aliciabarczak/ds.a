const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");


// function to get origin and destination paths for components from each atom, molecule and organism files
const getComponents = () => {
  let allComponents = [];
  const types = ["atoms", "molecules", "organisms"];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + "css"}`,
    }));
    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

// compile function to complie each componnet based on the origin and destination paths

const compile = (origin, destination) => {
  result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(origin)).toString(),
    outputStyle: "expanded",
    outFile: "global.css",
    includePaths: [Path.resolve("src")],
  });

  Fs.writeFileSync(Path.resolve(destination), result.css.toString());
};

// complie the global.scss file 

compile("src/global.scss", "lib/global.css");

// use the getComponents function to get the origin and destination paths for each component and then complue the smae 

getComponents().forEach((component) => {
  compile(component.input, component.output);
});
