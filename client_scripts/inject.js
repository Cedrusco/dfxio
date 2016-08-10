(function injectScripts() {

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  var cssDependencies = [
    "/dist/jk-carousel.css",
    "/angular-material.css",
    "/angular-material-icons.css",
    "/build/nv.d3.css",
    "/dfx-core-gcontrols.css"];

  cssDependencies.forEach(function(dependency) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');

    link.href = dependency;
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");

    head.appendChild(link);
  });

  var jsDependencies = ["/d3.js",
    "/build/nv.d3.js",
    "/dist/angular-nvd3.js",
    "/dist/ng-knob.js",
    "/angular-route.js",
    "/angular-animate.js",
    "/angular-aria.js",
    "/angular-material.js",
    "/angular-material-icons/angular-material-icons.js",
    "/angular-messages/angular-messages.js",
    "/angular-sanitize/angular-sanitize.js",
    "/dist/angular-jk-carousel/dist/jk-carousel.js",
    "/src/ng-quill/src/ng-quill.js",
    "/components.json",
    "/dfxio.js",
    "/dfx.app.runtime.js",
    "/dfx.app.services.js",
    "/dfx.gcontrols.js"];

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
