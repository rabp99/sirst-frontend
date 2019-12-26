'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.modelosService
 * @description
 * # modelosService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('modelosService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
