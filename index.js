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

router.use(express.static(path.join(__dirname, '../../node_modules')));
router.use(express.static(path.join(__dirname, '../../dfxio_components')));

module.exports = router;
