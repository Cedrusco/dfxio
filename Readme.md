# DFXIO

DFXIO is a module for injecting angular components created in Dreamface. 


## Installation
To install dfxio simple type in the command line:

    npm install dfxio

This includes all the components required for a dreamface component to function.
Including: 
  - angular material 
  - ng-knob
  - ng-quill
  - d3
  - nv.d3
  - angular-nvd3
  - angular-route
  - angular-animate
  - angular-aria
  - angular-material
  - angular-material-icons
  - angular-messages
  - angular-sanitize
  - ...

## Usage
Use `dfxio` as you would any other express middleware:

    var express = require('express'); 
    var app = express(); 
    
    var dfxio = require('dfxio');
    
    app.use(dfxio);


Create a directory `dfxio_components` at the root level of your project directory.
Make sure you add each component's javascript file to a json file called components.json
like this:

    ["hello_world_component/hello_world_component.js", "other_component/other_component.js"]

For your Angular application, `ng-app` and initial `ng-controller` needs to be 
at the level of the body elemnt at least, so `<body ng-app="appName" ng-controller="ctrlName">...`.


Make sure to statically serve the directory for dfxio components:

    app.use(express.static(path.join(__dirname, '../dfxio_components')));

Add this to your index.html (or any page you wish to load dfx components on):

    <script src="/example/angular.js"></script>
    <!-- this should be after the angular script tag -->
    <script src="/dfxio/inject.js"></script>
    <!-- should be before your own javascript files -->

## Contributors:
  - Michael Bae @ Cedrus
  - Linda Kung @ Cedrus
  - Colin Meret @ Cedrus
  - Olivier Poupeney @ Cedrus & Interactive Clouds
