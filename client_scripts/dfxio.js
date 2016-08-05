(function (angular) {
  'use strict';

  //INJECT DEPENDENCY SCRIPTS
  // function inject() {
  //   var head = document.getElementsByTagName('head')[0];
  //   var s = document.createElement('script'); // use global document since Angular's $document is weak
  //   s.src = "/inject.js";
  //   head.appendChild(s);
  // }

  var resume;
  var count = 0;
  var modules = [];

  var angularModule = angular.module.bind(angular);
  angular.module = function(moduleName, moduleDependencies) {
    modules.push(moduleName);
    return angularModule(moduleName, moduleDependencies);
  };


  function makeResume(numOfModules) {
    function resume(modulesLoaded, modulesList) {
      //there should be a way to dynamically add the modules to this array
      if(modulesLoaded === numOfModules) {
        angular.resumeBootstrap(['dfxioModule'].concat(modulesList));
      }
    }

    return resume;
  }

  function loadNewScript(source) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('script'); // use global document since Angular's $document is weak

    s.src = source;

    s.onload = function helper() {
        count++
        resume(count, modules)
        console.log('script has loaded')
    };

    // async false may be required!
    //s.async = false;
    head.appendChild(s);
  }

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  //load components in array
    $.get('/components.json').success(function(data) {
      resume = makeResume(data.length);
      data.forEach(function(script) {
        loadNewScript(script)
    })
  })

  var dfxio = function() {
    return {
      bindings: {
        component: '@'
      },
      templateUrl: function(elem, attr) {
        return attr.component + '/' + attr.component + '.html';
      }
    };
  };

  angular
    .module('dfxioModule', ['dfxAppRuntime',
        'dfxAppServices',
        'dfxGControls',
        'jkAngularCarousel',
        'ngAnimate',
        'ngMessages',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'ngMdIcons',
        'ngQuill',
        'nvd3',
        'ui.knob'])
    .controller('dfxioController', function ($scope) {
    })
    .directive('dfxio', dfxio);

  //var appName = $('[ng-app]').attr('ng-app');
  //angular
    //.module(appName)
    //.requires.push('dfxioModule');
})(angular);
