
var Promise = require('bluebird');
var path = require('path');
var chalk = require('chalk');
var ncp = Promise.promisify(require('ncp').ncp);
var rename = Promise.promisify(require('fs').rename);
var fs = Promise.promisifyAll(require('fs'));
var finder = require('fs-finder');
var exec = require('child_process').exec;
var isWin = (process.platform.indexOf('win32') != -1); //are we windowsing?

ncp.limit = 16;

var newProjectDir = process.cwd();
var generatorFilesPath = path.join(__dirname, '../generated');

var removePackageJSON = function removePackageJSON() {
    return new Promise(function(resolve, reject) {
        if (!isWin) {
            exec('find . -type f -name "package.json" -delete', function(error, stdout, stderr) {
                if (error) return reject(stderr);
                else return resolve(stdout);
            });
        } else {
            exec('del /s /q .\\package.json', function(error, stdout, stderr) {
                if (error) {
                    return reject(stderr);
                } else {
                    return resolve(stdout);
                }
            });
        }
    });
};

var copyFiles = function() {
    return ncp(generatorFilesPath, newProjectDir);
};

console.log(chalk.green('Generating dfxio files for your app!'));

copyFiles()
	.then(function() {
		return removePackageJSON();
	})
    .then(function() {
        var codeyBits = isWin ? 'Cmd Prompt' : 'Terminal';
        console.log(chalk.green('dfxio files have been added to your app!'));
    })
    .catch(function(err) {
        console.log(err);
});