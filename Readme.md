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

## Contributors:
  - Michael Bae @ Cedrus
  - Linda Kung @ Cedrus
  - Colin Meret @ Cedrus
  - Olivier Poupeney @ Cedrus & Interactive Clouds
