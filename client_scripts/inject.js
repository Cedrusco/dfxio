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
    "/jquery.min.js",
    "/d3.js",
    "/build/nv.d3.js",
    "/dist/angular-nvd3.js",
    "/dist/ng-knob.js",
    "/angular-route.js",
    "/angular-animate.js",
    "/angular-aria.js",
    "/angular-material.js",
    "/angular-material-icons.js",
    "/angular-messages.js",
    "/angular-sanitize.js",
    "/dist/jk-carousel.js",
    "/src/ng-quill.js",
    "/components.json",
    "/client_scripts/dfxio.js",
    "/client_scripts/dfx.app.runtime.js",
    "/client_scripts/dfx.app.services.js",
    "/client_scripts/dfx.gcontrols.js"];

  jsDependencies.forEach(function(dependency) {
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');

    script.src = '/dfxio-static' + dependency;
    script.async = false;

    if(dependency === "/components.json") {
      script.setAttribute("id", "components");
      script.setAttribute("type", "application/json");
    }

    body.appendChild(script);
  });

})();
