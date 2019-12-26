'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.infosService
 * @description
 * # infosService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('infosService', function () {
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
