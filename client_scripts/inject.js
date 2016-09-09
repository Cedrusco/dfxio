(function injectScripts() {

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  var cssDependencies = [
    "/dist/jk-carousel.css",
    "/angular-material.css",
    "/angular-material-icons.css",
    "/build/nv.d3.css",
    "/client_scripts/dfx-core-gcontrols.css"];

  cssDependencies.forEach(function(dependency) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');

    link.href = '/dfxio-static' + dependency;
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");

    head.appendChild(link);
  });

  var jsDependencies = [
    "/dfxio-static/jquery.min.js",
    "/dfxio-static/d3.js",
    "/dfxio-static/build/nv.d3.js",
    "/dfxio-static/dist/angular-nvd3.js",
    "/dfxio-static/dist/ng-knob.js",
    "/dfxio-static/angular-route.js",
    "/dfxio-static/angular-animate.js",
    "/dfxio-static/angular-aria.js",
    "/dfxio-static/angular-material.js",
    "/dfxio-static/angular-material-icons.js",
    "/dfxio-static/angular-messages.js",
    "/dfxio-static/angular-sanitize.js",
    "/dfxio-static/dist/jk-carousel.js",
	"/dfxio-static/dist/quill.js",
    "/dfxio-static/src/ng-quill.js",
    "/components.json",
    "/dfxio/client_scripts/dfxio.js",
    "/dfxio/client_scripts/dfx.app.runtime.js",
    "/dfxio/client_scripts/dfx.app.services.js",
    "/dfxio/client_scripts/dfx.gcontrols.js"];

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
