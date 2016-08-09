(function injectScripts() {

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  var cssDependencies = [
    "/angular-jk-carousel/dist/jk-carousel.css",
    "/angular-material/angular-material.css",
    "/angular-material-icons/angular-material-icons.css",
    "/nvd3/build/nv.d3.css",
    "/dfxio/dfx-core-gcontrols.css"];

  cssDependencies.forEach(function(dependency) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');

    link.href = dependency;
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");

    //script.async = false;

    head.appendChild(link);
  });

  var jsDependencies = ["/d3/d3.js",
  "/nvd3/build/nv.d3.js",
  "/angular-nvd3/dist/angular-nvd3.js",
  "/ng-knob/dist/ng-knob.js",
  "/angular-route/angular-route.js",
  "/angular-animate/angular-animate.js",
  "/angular-aria/angular-aria.js",
  "/angular-material/angular-material.js",
  "/angular-material-icons/angular-material-icons.js",
  "/angular-messages/angular-messages.js",
  "/angular-sanitize/angular-sanitize.js",
  "/angular-ui-router/release/angular-ui-router.js",
  "/angular-jk-carousel/dist/jk-carousel.js",
  "/ng-quill/src/ng-quill.js",
  "/components.json",
  "/dfxio/dfxio.js",
  "/dfxio/dfx.app.runtime.js",
  "/dfxio/dfx.app.services.js",
  "/dfxio/dfx.gcontrols.js"];

  jsDependencies.forEach(function(dependency) {
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');

    script.src = dependency;
    script.async = false;
    
    if(dependency === "/components.json") {
      script.setAttribute("id", "components");
      script.setAttribute("type", "application/json");
    }

    body.appendChild(script);
  });

})();
