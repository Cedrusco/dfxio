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

router.get('/dfxapiservice/*', function(req, res) {
  // split path to retrieve everything after /dfxapiservice
  var api_path = req.path.split('/dfxapiservice/')[1];
  var proxy = proxy || { host: 'localhost', port: 3000, username: 'admin', password: '12345' };
  var proxy_host = proxy.host.match(/http/) ? proxy.host : 'http://' + proxy.host;
  var proxy_port = proxy.port == 80 ? '' : ':' + proxy.port;
  var proxy_path = proxy.path || '';
  var proxy_url = proxy_host + proxy_port + proxy_path + api_path;
  request.post(proxy_url, {
    auth: {
      user: proxy.username,
      pass: proxy.password
    } 
  }, function(err, response, body) {
    res.json({ data: JSON.parse(body) }); 
  });
});

// TODO: Auto-generate components.json
router.use(express.static(path.join(__dirname, '../../dfxio_components')));

module.exports = router;
