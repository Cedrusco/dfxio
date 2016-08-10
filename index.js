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
  router.use(express.static(path.join(__dirname, '../../node_modules' + dependency)));
});

router.use(express.static(path.join(__dirname, '../../dfxio_components')));

module.exports = router;
