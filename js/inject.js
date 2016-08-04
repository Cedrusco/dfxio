(function() {
    var dependencies = ["/d3/d3.js",
    "/nvd3/build/nv.d3.js",
    "/angular-nvd3/dist/angular-nvd3.js",
    "/ng-knob/dist/ng-knob.js",
    "/angular-route/angular-route.js",
    "/angular-animate/angular-animate.js",
    "/angular-aria/angular-aria.js",
    "/angular-material/angular-material.js",
    "/angular-messages/angular-messages.js",
    "/angular-sanitize/angular-sanitize.js",
    "/angular-jk-carousel/dist/jk-carousel.js",
    "/ng-quill/src/ng-quill.js",
    "dfxio/dfxio.js",
    "dfxio/dfx.app.runtime.js",
    "dfxio/dfx.app.services.js",
    "dfxio/dfx.gcontrols.js"];

    if(document) {
        dependencies.forEach(function(dependency) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script'); 

            script.src = dependency;

            head.appendChild(script);
        })
    } else {
        return;
    }
    
})();
