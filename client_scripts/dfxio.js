(function (angular) {
  'use strict';

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
    var script = document.createElement('script'); // use global document since Angular's $document is weak

    script.src = source;
    // async false may be required!
    script.async = false;

    script.onload = function helper() {
      count++;
      resume(count, modules);
    };

    head.appendChild(script);
  }

  // load components in array
  $.get('/components.json').success(function(data) {
    resume = makeResume(data.length);
    data.forEach(function(script) {
      loadNewScript(script);
    });
  });

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

  var dfxioPubSub = function() {

    var obj = {};

    function makeUnsubscribe(channel, key) {
      return function unsubscribe() {
        delete obj[channel][key];
      };
    }

    function subscribe(channel, callback) {
      var uid = Date.now() + Math.floor(Math.random() * 10000);
      obj[channel] = obj[channel] || {};
      obj[channel][uid] = callback;
      return makeUnsubscribe(obj[channel], uid);
    };

    function broadcast(channel, message) {
      Object.keys(obj[channel]).forEach(function(key) {
        var subscriber = obj[channel][key];
        subscriber(message, makeUnsubscribe(obj[channel], key)); 
      }); 
    };

    return {
      
      _: {
        makeUnsubscribe: makeUnsubscribe 
      },

      broadcast: broadcast,
      subscribe: subscribe

    }

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
    .config(function($mdThemingProvider) {
      $mdThemingProvider
        .theme('success-toast')
        .primaryPalette('blue')
        .accentPalette('orange');
    })
    .controller('dfxioController', function ($scope) {
    })
    .directive('dfxio', dfxio)
    .factory('dfxioPubSub', dfxioPubSub);

})(angular);
