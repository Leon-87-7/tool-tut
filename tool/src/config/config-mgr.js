const chalk = require('chalk');
const { cosmiconfigSync } = require('cosmiconfig');
const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());
  if (!result) {
    console.log('Found configuration', pkg.tool);
    return pkg.tool;
    // } else if (hasJSConfigFile()) {
    //   return loadJSConfigFile();
  } else {
    console.log(
      chalk.yellow('Could not find configuration, using default')
    );
    return { port: 1234 };
  }
};
