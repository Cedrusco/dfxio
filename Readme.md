# DFXIO

DFXIO is a module for injecting angular components created in Dreamface. 


## Installation
To install dfxio simple type in the command line:

    npm install dfxio

This includes all the components required for a dreamface component to function.
Including: 
  - angular material 
  - ng-knob
  - ...

## Usage
Use `dfxio` as you would any other express middleware:

    var express = require('express'); 
    var app = express(); 
    
    var dfxio = require('dfxio');
    
    app.use(dfxio);

Make sure to statically serve the directory for dfxio components:

    app.use(express.static(path.join(__dirname, '../dfxio_components')));

Add this to your index.html (or any page you wish to load dfx components on):

    <script src="/dfxio-static/client_scripts/inject.js"></script>

## Contributors:
  - Michael Bae @ Cedrus
  - Linda Kung @ Cedrus
  - Colin Meret @ Cedrus
  - Olivier Poupeney @ Cedrus & Interactive Clouds
