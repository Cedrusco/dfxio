var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/dfxio/:file', function(req, res) {
  var fileName = req.params.file;
  var filePath = path.join(__dirname, 'client_scripts/', fileName);
  res.sendFile(filePath);
});

router.get('/gcontrols/web/:file', function(req, res) {
  var fileName = req.params.file;
  var filePath = path.join(__dirname, 'client_scripts/', 'gcontrols/', 'web/', fileName);
  res.sendFile(filePath);
});

var dfxioDependencies = [
  "/jquery/dist/",
  "/d3",
  "/nvd3",
  "/angular-nvd3",
  "/ng-knob",
  "/angular-route",
  "/angular-animate",
  "/angular-aria",
  "/angular-material",
  "/angular-material-icons",
  "/angular-messages",
  "/angular-sanitize",
  "/angular-jk-carousel",
  "/ng-quill",
  "/dfxio"
];

dfxioDependencies.forEach(function (dependency) {
  // Check how to serve node module dependencies based on node version
  if(process.versions.node[0] >= 5) {
    // For node v5 or higher, serve dependenceis from root node_modules folder
    router.use('/dfxio-static/', express.static(path.join(__dirname, '../../node_modules' + dependency)));
  } else {
    // For node v4 and lower, serve dependencies from this module's node_modules
    // folder, since npm2 and below installs module dependencies in each module 
    // folder instead of at the top level
    router.use('/dfxio-static/', express.static(path.join(__dirname, '/node_modules' + dependency)));
  }
});

router.use(express.static(path.join(__dirname, '../../dfxio_components')));

module.exports = router;
