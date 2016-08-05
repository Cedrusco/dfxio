var router = require('express').Router();
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


module.exports = router;
